provider "aws" {
  region = "eu-west-1"
  shared_credentials_file = "/home/qa/.aws/credentials"
}

module "aws_vpc" {
  source = "./VPC"
}

module "SecurityGroups" {
  source        = "./SG"
  sg_vpc_id       = module.aws_vpc.SGvpc_id
}

module "Bastion" {
#public subnet
source        = "./EC2"
name = "bastion-host"
subnet_id = module.aws_vpc.public_subnet_id_one
vpc_security_group_ids = [module.SecurityGroups.bastion_sg_id]
associate_public_ip_address = true

}

module "TestVM" {
#private subnet
source        = "./EC2"
name = "Test VM"
subnet_id = module.aws_vpc.private_subnet_id_one
vpc_security_group_ids = [module.SecurityGroups.private_sg_id]

}

module "Nexus" {
#private subnet
source        = "./EC2"
name = "Nexus"
subnet_id = module.aws_vpc.private_subnet_id_one
vpc_security_group_ids = [module.SecurityGroups.private_sg_id]
}

module "Jenkins" {
#private subnet
source        = "./EC2"
name = "Jenkins"
subnet_id = module.aws_vpc.private_subnet_id_one
vpc_security_group_ids = [module.SecurityGroups.private_sg_id]
}

module "ProductionDB"{
  source = "./RDS"
  vpc_security_group_ids = [module.SecurityGroups.private_sg_id]
  dbsubnet_groupname = "prodrds-subnet-group"
  subnet_ids = [module.aws_vpc.private_subnet_id_one,module.aws_vpc.private_subnet_id_two]
}

module "Cluster"{
  source = "./EKS"
  subnet_ids = [module.aws_vpc.public_subnet_id_one,module.aws_vpc.public_subnet_id_two,module.aws_vpc.public_subnet_id_three]
  EKS_security_group_ids = [module.SecurityGroups.public_sg_id]
  nodegroup_subnet_ids = [module.aws_vpc.public_subnet_id_one,module.aws_vpc.public_subnet_id_two,module.aws_vpc.public_subnet_id_three]
  remote_SG_ids = [module.SecurityGroups.public_sg_id]
}
