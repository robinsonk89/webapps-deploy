"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishProfileWebAppContainerDeploymentProvider = void 0;
const BaseWebAppDeploymentProvider_1 = require("./BaseWebAppDeploymentProvider");
class PublishProfileWebAppContainerDeploymentProvider extends BaseWebAppDeploymentProvider_1.BaseWebAppDeploymentProvider {
    DeployWebAppStep() {
        return __awaiter(this, void 0, void 0, function* () {
            const appName = this.actionParams.appName;
            const images = this.actionParams.images;
            const isLinux = this.actionParams.isLinux;
            yield this.kuduServiceUtility.deployWebAppImage(appName, images, isLinux);
        });
    }
}
exports.PublishProfileWebAppContainerDeploymentProvider = PublishProfileWebAppContainerDeploymentProvider;
