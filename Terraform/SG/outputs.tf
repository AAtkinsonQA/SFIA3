output "private_sg_id" {
    value = aws_security_group.private-sg.id
}

output "public_sg_id" {
    value = aws_security_group.public-sg.id
}

output "bastion_sg_id" {
    value = aws_security_group.bastion-host-sg.id
}