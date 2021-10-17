import mongoose from 'mongoose'

const deploymentSchema = mongoose.Schema({
    templateName: String,
    deployed: { type: Date, default: Date.now },
    version: String,
    url: String
});

export const Deployments = mongoose.model('deployments', deploymentSchema)
