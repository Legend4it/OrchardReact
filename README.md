# OrchardReact
Orchard headless CMS backend, PostgreSql in docker database and react app in frontend with graphQL

# Db and ConnectionString
docker run --name postgres_dev_container -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=Password123! -e POSTGRES_DB=Orchard_dev -p 15432:5432 -d postgres
Host=localhost;Port=15432;Database=Orchard_dev;Username=admin;Password=Password123!;


