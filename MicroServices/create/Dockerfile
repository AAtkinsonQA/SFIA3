FROM maven:latest AS build-stage
COPY . ./build
WORKDIR ./build
EXPOSE 8083
RUN mvn clean package
 
FROM java:8 AS runtime
WORKDIR /opt/fit
COPY --from=build-stage /build/target/*.jar app.jar
EXPOSE 8083
ENTRYPOINT ["/usr/bin/java", "-jar", "app.jar"]
