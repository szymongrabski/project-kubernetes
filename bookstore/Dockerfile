FROM maven:3-amazoncorretto-17 AS build
WORKDIR /workspace/app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]