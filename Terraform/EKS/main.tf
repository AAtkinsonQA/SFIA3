resource "aws_eks_cluster" "mycluster" {
  name     = "mycluster"
  role_arn = var.role_arn

  vpc_config {
    subnet_ids = var.subnet_ids
    security_group_ids = var.EKS_security_group_ids
  }

  tags = {
    Name = "mycluster"
  }
  version = "1.17"
}

resource "aws_eks_node_group" "node" {
  cluster_name    = aws_eks_cluster.mycluster.name
  node_group_name = "LiveNodes"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.nodegroup_subnet_ids
  ami_type = var.ami_type
  instance_types = var.instance_types


  scaling_config {
    desired_size = 2
    max_size     = 2
    min_size     = 2
  }

}