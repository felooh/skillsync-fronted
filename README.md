# React Project Deployment on EC2 Using CodePipeline

This document outlines the steps followed to deploy the React project on an EC2 instance using AWS CodePipeline and CodeDeploy.

## Prerequisites

- **React Application**: Ensure your React project is set up and tested locally.
- **AWS Account**: Access to AWS services including EC2, S3, CodePipeline, and CodeDeploy.
- **IAM Roles**: 
  - EC2 instance must have a role with AWSCodeDeployRole permissions.
  - CodePipeline must have access to S3 and CodeDeploy.
- **AWS CLI**: Installed and configured with appropriate credentials.

## Deployment Steps

### 1. Setting up the EC2 Instance

Launch an EC2 instance with an Amazon Linux 2 or Ubuntu AMI.

SSH into the instance:
```bash
ssh -i <your-key.pem> ec2-user@<your-instance-public-ip>
```

Install required packages:
```bash
sudo yum update -y
sudo yum install -y git nodejs npm nginx
```

> **Note**: Add a screenshot of the EC2 instance details (e.g., instance type, security group settings)

### 2. Installing and Configuring CodeDeploy Agent

Install the CodeDeploy agent:
```bash
sudo yum install ruby
sudo yum install wget
cd /home/ec2-user
wget https://aws-codedeploy-<region>.s3.<region>.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start
```

Verify the agent is running:
```bash
sudo service codedeploy-agent status
```

### 3. Setting up the React Application

Navigate to /var/www and clone your project repository:
```bash
cd /var/www
sudo git clone <your-repo-url> react-app
cd react-app
```

### 4. Configuring Nginx

Update the Nginx configuration to serve the React app:
```bash
sudo vi /etc/nginx/nginx.conf
```

Replace the server block with:
```nginx
server {
    listen 80;
    server_name _;
    
    location / {
        root /var/www/react-app/build;
        index index.html;
        try_files $uri /index.html;
    }
}
```

Restart Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

### 5. Preparing Deployment Scripts

Create the following files in your React project:

#### appspec.yml
```yaml
version: 0.0
os: linux
files:
  - source: /
    destination: /var/www/react-app
hooks:
  AfterInstall:
    - location: scripts/after_install.sh
      timeout: 300
  ApplicationStart:
    - location: scripts/start_server.sh
      timeout: 300
```

#### scripts/after_install.sh
```bash
#!/bin/bash
cd /var/www/react-app
npm ci
npm run build
```

#### scripts/start_server.sh
```bash
#!/bin/bash
sudo nginx -t && sudo systemctl restart nginx
```

> **Note**: Add a screenshot of the prepared appspec.yml and deployment scripts in your project directory

### 6. Setting Up CodePipeline

1. S3 Bucket: Upload your zipped React project to an S3 bucket.
2. Create a Pipeline:
   - Source: S3 or your preferred source repository (e.g., GitHub)
   - Build Stage: Skip or include a build stage as needed
   - Deploy Stage: Use AWS CodeDeploy with the EC2 instance as the target
3. Trigger the pipeline to deploy the React app

### Verifying Deployment

Access the React app in your browser:
```
http://<EC2-Instance-Public-IP>
```

## Troubleshooting

- Check CodeDeploy agent logs:
  ```bash
  sudo cat /var/log/aws/codedeploy-agent/codedeploy-agent.log
  ```

- Nginx errors: 
  ```bash
  cat /var/log/nginx/error.log
  ```

- Deployment issues: Review CodeDeploy logs at `/var/log/aws/codedeploy-agent/codedeploy-agent.log`





# SCREENSHOTS

![alt text](/screenshots/Screenshot%20from%202024-11-20%2016-58-38.png)


![alt text](/screenshots/Screenshot%20from%202024-11-20%2017-36-21.png)
