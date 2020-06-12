# TODO LIST

> A Spring boot and React project
> front-end 는 frontend 디렉토리의 README.md 파일을 참조하십시오.

## Build Setup (초기 세팅방법)

``` bash
# install, build dependencies
gradle dependencies

# H2DB 접속 방법 /src/main/resources/application.properties 세팅 정보를 참고하십시오.
# H2DB 접속 정보
  1. http://localhost:8090/console
  2. username = todolist
  3. password = todolist

```

## 프로젝트 설명
```
API Server and Front-end
```

## 배포방법 (리눅스)
```
1. Front-end 코드는 webpack build 된 파일이 ./resources 디렉토리에 위치되어 있습니다.
2. gradle build 를 실행하여 todo-list의 최상위 build 디렉토리의 libs 바이너리 파일을 실행하시면 됩니다.
```
