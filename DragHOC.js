import React from 'react'

const DragHOC = (customDrag = false) => WrappedComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translateX: 0,
            translateY: 0,
        };
        this.moving = false;
        this.lastX = null;
        this.lastY = null;
        window.onmouseup = e => this.onMouseUp(e);
        window.onmousemove = e => this.onMouseMove(e);
    }

    onMouseDown(e) {
        e.stopPropagation();
        this.moving = true;
    }

    onMouseUp() {
        this.moving = false;
        this.lastX = null;
        this.lastY = null;
    }

    onMouseMove(e) {
        this.moving && this.onMove(e);
    }

    onMove(e) {
        if(this.lastX && this.lastY) {
            let dx = e.clientX - this.lastX;
            let dy = e.clientY - this.lastY;
            this.setState({ translateX: this.state.translateX + dx, translateY: this.state.translateY + dy })
        }
        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }

    render = () =>
        <div
            onMouseDown={e => customDrag ? null : this.onMouseDown(e)}
            style={{transform: `translateX(${this.state.translateX}px)translateY(${this.state.translateY}px)`}}
        >
            <WrappedComponent
                {...this.props}
                ref={ref => this.instanceComponent = ref}
                onMouseDown={e => customDrag ? this.onMouseDown(e) : null}
            />
        </div>
};

export default DragHOC;
