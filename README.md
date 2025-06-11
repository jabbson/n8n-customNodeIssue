# n8n-nodes-customNodeIssue

This is an n8n community node. It lets you experience the issue with using credential properties in Node's code your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

Only one operation - get.

## Credentials

No special credentials needed (will always succeed). Configure one just to have credential properties set.

## Compatibility

Tested on self-hosted docker version of n8n, 1.95.3

## Usage

Use https://app.beeceptor.com/console/n8n-node (a free rest api tested) to test the request.

When configuring the credentials a request will be made to "/?n8n=rocks", it will have the header set ("credtest": "BINGO"),
then execute the node and it will make a request to (/node-test?n8n=rocks) and the header will be missing (even though set with templating).

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## Version history

v0.1.0 - initial commit

