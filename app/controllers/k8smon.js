// const k8s = require("@kubernetes/client-node");
// const kc = new k8s.KubeConfig();
// kc.loadFromDefault();
// const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
// const watch = new k8s.Watch(kc);

const { K8SAPI } = require("../api");

exports.do = async () => {
  K8SAPI.watcher
    .watch(
      "/api/v1/events",
      {
        allowWatchBookmarks: true,
      },
      (type, apiObj, watchObj) => {
        if (type === "ADDED") {
          // tslint:disable-next-line:no-console
          console.log("new object:");
        } else if (type === "MODIFIED") {
          // tslint:disable-next-line:no-console
          console.log("changed object:");
        } else if (type === "DELETED") {
          // tslint:disable-next-line:no-console
          console.log("deleted object:");
        } else if (type === "BOOKMARK") {
          // tslint:disable-next-line:no-console
          console.log(`bookmark: ${watchObj.metadata.resourceVersion}`);
        } else {
          // tslint:disable-next-line:no-console
          console.log("unknown type: " + type);
        }
        // tslint:disable-next-line:no-console
        console.log(apiObj);
      },
      (err) => {
        console.log(err);
      }
    )
    .then((req) => {
      setTimeout(() => {
        req.abort();
      }, 1000 * 1000);
    });
};
