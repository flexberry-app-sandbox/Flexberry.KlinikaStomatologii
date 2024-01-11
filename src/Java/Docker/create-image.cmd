docker build --no-cache -f SQL\Dockerfile.PostgreSql -t klinika_stomatologii-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t klinika_stomatologii-java/app ../../..
