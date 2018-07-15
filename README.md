<p align="center">
  <img src="https://user-images.githubusercontent.com/40995577/42487947-ea40d256-840b-11e8-8acc-50e62a3226b7.png">
</p>

# 🌹 Sharyn Boilerplate

This is a preconfigured project that uses every feature of [**Sharyn**](https://github.com/sharynjs/sharyn).

## 🌹 Getting started

- [**Download**](https://github.com/sharynjs/sharyn-boilerplate/archive/master.zip) the project
- Duplicate `.env-sample` into `.env`
- If needed, add fields to `package.json` (`name`, `version`, `repository`, `description`, `author`...)
- Create a Heroku app and provision it with Heroku Postgres and Heroku Redis
- Add a `SESSION_SECRET_KEY` variable to your Heroku app containing any secret string
- Delete the content of this `README.md` file

By default, this project uses Docker ([download](https://www.docker.com/community-edition#/download)) and Heroku ([download CLI](https://devcenter.heroku.com/articles/heroku-cli)), so make sure you have those installed.

If you don't want to use Docker, delete the `docker-compose.yml` file.

If you don't want to use Heroku, delete the `Procfile` file.
