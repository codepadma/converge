psql -c "drop database converge"
psql -c "create database converge"
knex migrate:latest --knexfile "db/knexfile.js"
