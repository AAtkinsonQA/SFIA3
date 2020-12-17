output "SGvpc_id" {
    value = aws_vpc.final_project.id
}

output "public_subnet_id_one" {
    value = aws_subnet.public[0].id
}

output "public_subnet_id_two" {
    value = aws_subnet.public[1].id
}

output "public_subnet_id_three" {
    value = aws_subnet.public[2].id
}

output "private_subnet_id_one" {
    value = aws_subnet.private[0].id
}
output "private_subnet_id_two" {
    value = aws_subnet.private[1].id
}