resource "aws_security_group" "bastion-host-sg" {
  name        = "all-ssh-devs-only"
  description = "Allow TLS inbound traffic"
  vpc_id      = var.sg_vpc_id   //aws_vpc.final_project.id

  ingress {
    description = "SSH from devs"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = var.dev_ips //[aws_vpc.final_project.cidr_block]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "bastion-host"
  }
}

resource "aws_security_group" "public-sg" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic"
  vpc_id      = var.sg_vpc_id //aws_vpc.final_project.id

  ingress {
    description = "HTTP open port"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr_block, "0.0.0.0/0"]
  }

  ingress {
    description = "open for testing spring boot"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr_block, "0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "spring-boot-port"
  }
}

resource "aws_security_group" "private-sg" {
  name        = "private-sub-sg"
  description = "Allows traffic on 8080 for jenkins"
  vpc_id      = var.sg_vpc_id

  ingress {
    description = "Jenkins"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = var.dev_ips
  }

  ingress {
    description = "Nexus"
    from_port   = 8081
    to_port     = 8082
    protocol    = "tcp"
    cidr_blocks = var.dev_ips
  }

  ingress {
    description = "Nexus"
    from_port   = 8081
    to_port     = 8082
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr_block]
  }



  ingress {
    description = "mysql"
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = var.dev_ips
  }

  ingress {
    description = "SSH other VMs in VPC"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr_block]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow jenkins"
  }
}