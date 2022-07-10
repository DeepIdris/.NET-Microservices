import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";

export const ENV_CONFIG = new InjectionToken<typeof environment.config>('envConfig');