output "Bastion-ip" {
    value = module.Bastion.ec2-ip
}

output "Nexus-ip" {
    value = module.Nexus.private-ip
}

output "Jenkins-ip" {
    value = module.Jenkins.private-ip
}

output "Test-ip" {
    value = module.TestVM.private-ip
}
