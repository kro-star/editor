# Инструкция по запуску приложения локально.

1. Сделайте форк репозитория kro-star/editor. Как делать форк можно посмотреть [здесь](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

2. Откройте свой IDE(например, VS Code), откройте папу, в которую хотите склонировать проект. Введите следующую комманду:

#### `git clone https://github.com/YOUR-USERNAME/editor`

YOUR-USERNAME - имя вашего пользователя на github.com
editor - имя клонируемого проекта

3. Перейдите в корневую директорию склонированного проекта коммандой

#### `cd editor`

4. Запустите скрипт, для установки зависимостей
   
#### `npm --legacy-peer-deps install`

5. Запустите следующий скрипт и после его выполнения откроется [http://localhost:3000](http://localhost:3000) в вашем браузере.

#### `npm start`



