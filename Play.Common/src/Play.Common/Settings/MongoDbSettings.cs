namespace Play.Common.Settings
{
    public class MongoDbSettings
    {
        public string Host { get; init; }
        public int Port { get; init; }  
        public string User { get; set; }
        public string Password { get; set; }

        public string ConnectionString => $"mongodb://{Host}:{Port}";

    }
}