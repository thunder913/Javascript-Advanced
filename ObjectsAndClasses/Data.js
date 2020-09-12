function HTTP()
{
    class Request
    {
        constructor(method, url, version, message, response, fulfilled)
        {
            this.method = method;
            this.uri = url;
            this.version = version;
            this.message = message;
            this.response = undefined;
            this.fulfilled = false;
        }
    }
}

HTTP();


