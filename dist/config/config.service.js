"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const dotenv_1 = require("dotenv");
let ConfigService = class ConfigService {
    constructor() {
        const isDevelopmentEnv = process.env.NODE_ENV !== 'production';
        if (isDevelopmentEnv) {
            const envFilePath = __dirname + '/../../.env.development';
            const existsPath = fs.existsSync(envFilePath);
            if (!existsPath) {
                console.log('.env.development no existe DEVELOPMENT');
            }
            this.envConfig = (0, dotenv_1.parse)(fs.readFileSync(envFilePath));
        }
        else {
            const envFilePath = __dirname + '/../../.env.production';
            const existsPath = fs.existsSync(envFilePath);
            if (!existsPath) {
                console.log('.env.production no existe PRODUCTION');
            }
            this.envConfig = (0, dotenv_1.parse)(fs.readFileSync(envFilePath));
        }
    }
    get(key) {
        return this.envConfig[key];
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConfigService);
//# sourceMappingURL=config.service.js.map