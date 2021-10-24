const byid = (id) => document.getElementById(id);
const byclass = (classname) => Array.from(document.getElementsByClassName(classname));
const byname = (name) => Array.from(document.getElementsByName(name));
const bytag = (tag) => Array.from(document.getElementsByTagName(tag));
const log = (data) => { console.log(new Date().getMilliseconds() + ": " + data) };