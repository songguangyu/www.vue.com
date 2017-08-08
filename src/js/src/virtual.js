import axios from 'axios';
import vrtmpl from 'html2hscript';
import utils from './utils/utils';
import observe from './utils/observe';
import { h, diff, patch, create, VText, VNode } from 'virtual-dom';
const datasource = { user: { name: "nxiao", id: "nx4276", age: 27 } };
let tree, node;

function render(data) {
    let nodes = [];
    for (var key in data) {
        if (!(key == "$observeProps" || key == "$observerPath")) {
            nodes.push(new VNode('li', {
                className: "greeting"
            }, [
                new VText(key + '=>' + String(data[key]))
            ]));
        };
    };
    return h('ul', {
        className: "greeting",
    }, nodes);
};
/**
 * 监听数据源变化
 */
observe(datasource, (name, value, old) => {
    let newtree = render(datasource.user);
    let patches = diff(tree, newtree); //将新的虚拟dom与上一次的dom对比 得到修改的虚拟dom
    tree = newtree;
    node = patch(node, patches); //将对比之后的虚拟dom映射到上一次真实的dom
});
console.log(datasource);
tree = render(datasource.user); // 渲染虚拟dom
node = create(tree); // 转换为真实dom
document.body.appendChild(node); //将渲染的元素插入document 
setTimeout(() => {
    axios.get("http://192.168.203.71/user").then((response) => {
        datasource.user.name = response.data.name;
    }).catch(function(error) {
        console.log(error);
    });
}, 2000);

function evil(fn) {
    window.h = h;
    return new Function('return ' + fn)();
};
vrtmpl('<ul class="greeting"><li class="greeting">node</li><li class="greeting">id=nx4276</li><li class="greeting">27</li></ul>', function(err, hscript) {
    document.body.appendChild(create(evil(hscript))); //将渲染的元素插入document 
});
console.log(datasource);