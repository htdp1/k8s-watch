const k8s = require("@kubernetes/client-node");
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const watcher = new k8s.Watch(kc);
const api = kc.makeApiClient(k8s.CoreV1Api);
module.exports = { api, watcher };
