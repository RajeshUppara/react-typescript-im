/** Storage  */
export default class Storage {

    static pid = 'ri';
    static setLocalItem(key: string, val: string) {
        key = this.pid + '-' + key;
        if (val) {
            if (typeof val === 'object') {
                val = JSON.stringify(val);
            }
            localStorage.setItem(key, val);
        }

    }
    static getLocalItem(key: string) {
        key = this.pid + '-' + key;
        let val = localStorage.getItem(key);
        if (val) {
            if (val.indexOf("{") > -1) {
                val = JSON.parse(val);
            } else if (val.indexOf("[") > -1) {
                val = JSON.parse(val);
            }
            return val;
        } else {
            return null;
        }
    }
    static removeLocalItem(key: string) {
        key = this.pid + '-' + key;
        localStorage.removeItem(key);
    }
    static setSessionItem(key: string, val: string) {
        key = this.pid + '-' + key;
        if (val) {
            if (typeof val === 'object') {
                val = JSON.stringify(val);
            }
            sessionStorage.setItem(key, val);
        }

    }

    static getSessionItem(key: string) {
        key = this.pid + '-' + key;
        let val = sessionStorage.getItem(key);
        if (val) {
            if (val.indexOf("{") > -1) {
                val = JSON.parse(val);
            } else if (val.indexOf("[") > -1) {
                val = JSON.parse(val);
            }
            return val;
        } else {
            return null;
        }
    }
    static removeSessionItem(key: string) {
        key = this.pid + '-' + key;
        sessionStorage.removeItem(key);
    }
    static sessionClear() {
        sessionStorage.clear();
    }


    static setJWT(val: string) {
        if (val) {
            sessionStorage.setItem(this.pid + '-jwt', val);
        }
    }
    static getJWT() {
        return sessionStorage.getItem(this.pid + '-jwt');
    }
    static setUser(val: string) {
        if (val) {
            this.setSessionItem('user', val);
        }
    }
    static getUser() {
        return this.getSessionItem('user');
    }
    static setMenu(val: string) {
        if (val) {
            this.setSessionItem('menu', val);
        }
    }
    static getMenu() {
        return this.getSessionItem('menu');
    }

    static getBranch() {
        return this.getSessionItem('branch');
    }
    static setBranch(val: string) {
        if (val) {
            this.setSessionItem('branch', val);
        }
    }

    static clearSession() {
        this.removeSessionItem('jwt');
        this.removeSessionItem('user');
        this.removeSessionItem('menu');
        this.removeSessionItem('branch');
    }
}