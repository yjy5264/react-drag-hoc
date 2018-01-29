# react-drag-hoc
With this hoc, you can drag a component.

## Install
```
yarn add react-drag-hoc
```
or
```
npm i react-drag-hoc
```
## Usage
### 1.If you only need to drag a React Component
```javascript
class DIV extends React.Component {
    render() {
        return <div style={{ width: 100, height: 100, backgroundColor: 'blue' }} />;
    } 
}

const DragAbleDIV = DragHOC()(DIV);
```
or you can use ES6 Decorator
```javascript
@DragHOC()
class DIV extends React.Component {
    render() {
        return <div style={{ width: 100, height: 100, backgroundColor: 'blue' }} />;
    } 
}
```
### 2.If you need to drag a part of React Component
```javascript
// can only drag the red div
class DIV extends React.Component {
    render() {
        return (
            <div style={{ width: 100, height: 100, backgroundColor: 'blue' }}>
                <div
                    style={{ width: 100, height: 30, backgroundColor: 'red' }}
                    onMouseDown={e => this.props.onMouseDown(e)}
                />
            </div>
        );
    }
}

const CustomDragAbleDIV = DragHOC('customDrag')(DIV);
```
or ES6 Decorator
```javascript
@DragHOC('customDrag')
class DIV extends React.Component {
    render() {
        return (
            <div style={{ width: 100, height: 100, backgroundColor: 'blue' }}>
                <div
                    style={{ width: 100, height: 30, backgroundColor: 'red' }}
                    onMouseDown={e => this.props.onMouseDown(e)}
                />
            </div>
        );
    }
}
```
### [源码实现.md(中文)](https://github.com/yjy5264/yjy5264.github.io/blob/master/blogs/drag.md)