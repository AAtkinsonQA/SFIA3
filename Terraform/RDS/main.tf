resource "aws_db_subnet_group" "_" {
  name       = var.dbsubnet_groupname
  subnet_ids = var.subnet_ids
}

resource "aws_db_instance" "production" {
  allocated_storage      = 20
  storage_type           = "gp2"
  engine                 = "mysql"
  engine_version         = "5.7"
  instance_class         = "db.t2.medium"
  identifier = "tickets"
  name                   = "tickets"
  username               = var.user
  password               = var.password
  skip_final_snapshot    = "true"
  publicly_accessible    = "true"
  vpc_security_group_ids = var.vpc_security_group_ids
  db_subnet_group_name   = var.dbsubnet_groupname

  tags = {
    Name = "tickets"
  }
}