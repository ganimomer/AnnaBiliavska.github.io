'use strict';

module.exports = {
    editorReady: async function (editorSDK, appDefinitionId) {
        const appPublicAPI = await editorSDK.document.application.getPublicAPI(appDefinitionId, {appDefinitionId: '151294ae-dbdf-1943-4d8c-d6bdadf56ec2'});
        await appPublicAPI.sendLog("Got it");
    },
    getAppManifest: () => ({}),
    onEvent: () => {}
};