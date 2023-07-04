FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests


FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/assignment-2-0.0.1-SNAPSHOT.jar assignment-2.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","assignment-2.jar"]
