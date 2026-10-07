const { contextBridge, ipcRenderer } = require('electron');
const inv = (c, ...a) => ipcRenderer.invoke('desk:' + c, ...a);
contextBridge.exposeInMainWorld('desktop', {
  isDesktop: true,
  info: () => inv('info'), openFolder: (kind, sub) => inv('openFolder', kind, sub), chooseRoot: () => inv('chooseRoot'),
  writeState: s => inv('writeState', s), readState: () => inv('readState'),
  backup: (name, s) => inv('backup', name, s), autoBackup: s => inv('autoBackup', s),
  listBackups: () => inv('listBackups'), readBackup: n => inv('readBackup', n),
  saveMedia: (folder, name, buf) => inv('saveMedia', folder, name, buf),
  mediaUrl: rel => inv('mediaUrl', rel), deleteMedia: rel => inv('deleteMedia', rel), showMedia: rel => inv('showMedia', rel),
});
