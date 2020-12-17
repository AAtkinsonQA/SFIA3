output "ec2-ip" {
  value = aws_instance.Instances.public_ip
}

output "private-ip" {
    value = aws_instance.Instances.private_ip
}