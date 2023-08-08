// 虚拟DOM元素的类，构建实例对象，用来描述DOM
class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

// 创建虚拟DOM，返回虚拟节点(object)
function createElement(type, props, children) {
  return new Element(type, props, children)
}

// 将虚拟Dom渲染成真实的Dom
function render(domObj) {
  // 根据type类型来创建对应的元素
  let el = document.createElement(domObj.type)

  // 遍历props属性对象，然后给创建的元素设置属性
  for (let key in domObj.props) {
    // 设置属性的方法
    setAttr(el, key, domObj.props[key])
  }

  // 遍历子节点
  //如果是虚拟Dom，继续遍历渲染
  //如果是文本节点，直接设置
  domObj.children.forEach((child) => {
    child =
      child instanceof Element ? render(child) : document.createTextNode(child)
    //添加到创建对应的元素
    el.appendChild(child)
  })

  return el
}

// 设置属性
function setAttr(node, key, value) {
  switch (key) {
    case "value":
      if (
        node.tagName.toLowerCase() === "input" ||
        node.tagName.toLowerCase() === "textarea"
      ) {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break
    case "style":
      // 直接设置行内样式
      node.style.cssText = value
      break
    default:
      node.setAttribute(key, value)
      break
  }
}

function renderDom(node, target) {
  target.appendChild(node)
}

export { Element, createElement, render, renderDom }
