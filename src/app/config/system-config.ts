import { environment, settings } from '../../environments/environment.prod';
export class SystemConfig {
    public static version: string = "1.0.1";
    public static appName: string = "SPARKS";
    public static generalErrorMsg: string = "Unable to connect with SPARKS service. Please try again later.";
    
    public static apiAppToken: string = "NMncmmYef0YpCkVpmJu65pe9LWNKKOTkyXL8B3IYje7E4y8tIzzMRseCrvuOq3TH3";  
    public static apiBaseUrl: string = settings.apiBaseUrl;
    public static rsaPass: string = ""; //RSA_PASS;

    public static appId = "my.com.websight.idsmed.sparks.funnel";
    public static appType = environment.production ? "PRODUCTION" : "STAGING";
}