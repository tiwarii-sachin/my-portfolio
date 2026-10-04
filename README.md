# Personal Portfolio — Vercel & AWS Cloud Deployment

A responsive personal portfolio website showcasing my skills, projects, certifications, and professional profile.

The portfolio is deployed using **two deployment approaches**:

* **Vercel** — primary frontend hosting and continuous deployment
* **AWS EC2 + Terraform + Nginx** — cloud infrastructure and server-based deployment

## 🚀 Project Overview

This project demonstrates how the same static portfolio website can be deployed using both a managed cloud hosting platform and a self-managed cloud server.

### Deployment Architecture

```text
                         GitHub Repository
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
                 Vercel                 Terraform
                    │                       │
                    ▼                       ▼
            Managed Hosting             AWS EC2
                                            │
                                         Ubuntu
                                            │
                                         Nginx
                                            │
                                            ▼
                                   Portfolio Website
```

## 🌐 Deployment 1 — Vercel

The portfolio is deployed on **Vercel** for easy and automated hosting.

### Vercel Deployment Flow

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
Live Portfolio
```

Whenever changes are pushed to the GitHub repository, Vercel can automatically build and deploy the updated website.

### Benefits

* Fast deployment
* Automatic deployments from GitHub
* CDN-based delivery
* HTTPS support
* Simple deployment workflow

**Live Website:**
Add your Vercel URL here.

```text
https://your-vercel-domain.vercel.app
```

## ☁️ Deployment 2 — AWS EC2 Using Terraform

The portfolio was also deployed on an **AWS EC2 Ubuntu server** using **Terraform**.

Terraform was used as Infrastructure as Code (IaC) to provision the required AWS infrastructure.

### AWS Deployment Flow

```text
GitHub
   │
   ▼
Terraform
   │
   ├── EC2 Instance
   │
   └── Security Group
          │
          ▼
     Ubuntu Server
          │
          ▼
        Nginx
          │
          ▼
  Portfolio Website
```

### AWS Infrastructure

Terraform provisions:

* AWS EC2 instance
* Ubuntu Server
* Security Group
* SSH access
* HTTP access on port `80`

### AWS Security Group

| Protocol | Port | Purpose |
| -------- | ---: | ------- |
| TCP      |   22 | SSH     |
| TCP      |   80 | HTTP    |

### Terraform Structure

```text
terraform/
├── main.tf
├── provider.tf
├── variables.tf
├── outputs.tf
└── .terraform.lock.hcl
```

### Deployment Commands

```bash
cd terraform

terraform init
terraform validate
terraform plan
terraform apply
```

Terraform outputs the EC2 public IP and website URL after successful deployment.

## 🔍 AWS Deployment Verification

The EC2 deployment was verified using Nginx.

### Nginx Status

```bash
sudo systemctl status nginx
```

Result:

```text
Active: active (running)
```

### HTTP Verification

```bash
curl -I http://localhost
```

Result:

```text
HTTP/1.1 200 OK
Server: nginx/1.24.0 (Ubuntu)
Content-Type: text/html
```

This confirmed that the portfolio website was successfully served by Nginx.

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Cloud & DevOps

* AWS EC2
* Terraform
* Ubuntu Linux
* Nginx
* Git
* GitHub
* Vercel

## 📁 Project Structure

```text
my-portfolio/
│
├── assets/
├── css/
├── js/
├── terraform/
│   ├── main.tf
│   ├── provider.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── .terraform.lock.hcl
│
├── index.html
├── README.md
└── .gitignore
```

## 📸 Deployment Evidence

The project includes evidence of both deployment approaches.

### Vercel

* Vercel deployment
* Live portfolio
* GitHub integration

### AWS EC2

* Terraform plan
* Terraform apply
* EC2 instance
* SSH connection
* Nginx status
* HTTP `200 OK`
* Live portfolio on EC2

## 🔐 Security

Sensitive files are excluded from version control:

```text
terraform.tfvars
terraform.tfstate
terraform.tfstate.backup
*.pem
.terraform/
```

Private SSH keys and Terraform state files should never be committed to a public repository.

## 📊 Project Outcome

Successfully deployed the personal portfolio using **two cloud deployment approaches**:

### Vercel

A managed hosting platform providing simple GitHub-based deployment.

### AWS EC2

A self-managed cloud deployment where infrastructure was provisioned using Terraform and the website was served through Nginx on Ubuntu.

This project demonstrates practical experience with:

* Cloud deployment
* AWS EC2
* Infrastructure as Code
* Terraform
* Linux
* Nginx
* Git & GitHub
* Vercel

## 🔮 Future Enhancements

* HTTPS/SSL configuration on AWS
* Custom domain with Route 53
* GitHub Actions CI/CD
* AWS CloudWatch monitoring
* Automated Terraform deployment
* High-availability infrastructure
* AWS load balancing

## 👨‍💻 Author

**Sachin Tiwari**

Computer Science & Engineering Student
Lovely Professional University

### Profiles

* GitHub: https://github.com/tiwarii-sachin
* LinkedIn: https://linkedin.com/in/sachin-tiwari-2

---

⭐ Built as a practical Cloud & DevOps project using **Vercel, AWS EC2, Terraform, Ubuntu, and Nginx**.
