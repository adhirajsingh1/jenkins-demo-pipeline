# Jenkins Demo Pipeline 🚀

This project demonstrates a basic CI/CD pipeline using **Jenkins** and **Docker** to automate the build and deployment of a simple Node.js application.

---

## 🛠️ Tools Used

- **Jenkins** (running in Docker)
- **Docker**
- **GitHub**
- **Docker Hub**

---


It listens on port `3000`.

---

## ⚙️ Jenkins Pipeline Stages

The pipeline defined in `Jenkinsfile` consists of:

1. **Checkout** – Clones the GitHub repository.
2. **Build** – Builds a Docker image of the app.
3. **Push to Docker Hub** – Pushes the image to your Docker Hub account.

---

1. Jenkins Setup (First-Time)

    Run Jenkins in Docker:

docker run -d -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  --name jenkins jenkins/jenkins:lts

    Get the admin password:

docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword

    Finish setup in browser at: http://localhost:8080

2. Configure Jenkins Job

    Create a Pipeline job.

    Link your GitHub repo.

    Set Jenkinsfile as pipeline script from SCM.

    Add Docker Hub credentials in Jenkins:

        ID: dockerhub-credentials

3. Trigger the Pipeline

    Push any commit to the repo.

    Or click Build Now in Jenkins dashboard.



