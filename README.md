# TODO LIST

![스크린샷 2020-06-17 오후 3 36 45](https://user-images.githubusercontent.com/45628770/84863857-a3610a80-b0b0-11ea-93cc-d3c03f56503c.png)

> A Spring boot and React project
<br />
>
>
> frontend 는 frontend 디렉토리의 README.md 파일을 참조하십시오.

## Build Setup (초기 세팅 방법 및 안내사항)

``` bash
# install, build dependencies
gradle dependencies

# H2DB 접속 방법 /src/main/resources/application.properties 세팅 정보를 참고하십시오.
# H2DB 접속 정보
  1. http://localhost:8090/console
  2. username = todolist
  3. password = todolist

# 초기에는 기본으로 생성된 H2 DB File이 있습니다.
(이 프로젝트를 위한 기본 테이블은 이미 생성되어 있는 상태 입니다.)

# 초기에는 기본으로 /lib 디렉토리에 todolist-0.0.1-SNAPSHOT.jar 이 있습니다.
(이 프로젝트를 위한 최종 build 파일은 이미 생성되어 있는 상태 입니다.)

```

## 프로젝트 설명
```
API Server and Frontend
```

## 배포방법 (리눅스)
```
1. Front-end 코드는 webpack build 된 파일이 ./resources 디렉토리에 위치되어 있습니다.
2. gradle build 를 실행하여 todo-list의 최상위 build 디렉토리의 libs 바이너리 파일을 ftp로 옮기시고 실행하시면 됩니다.
3. 실행후 브라우저에서 해당 서버의 http://IP:PORT 로 접속하세요.
   (기본세팅 포트는 8090 입니다.)
```
