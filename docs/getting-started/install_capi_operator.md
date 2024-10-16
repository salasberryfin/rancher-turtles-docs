---
sidebar_position: 3
---

# Install Cluster API Operator

This section describes how to install `Cluster API Operator` in the Kubernetes cluster.

## Installing CAPI and providers

`CAPI` and desired `CAPI` providers could be installed using the helm-based installation for [`Cluster API Operator`](https://github.com/kubernetes-sigs/cluster-api-operator) or as a helm dependency for the `Rancher Turtles`.

### Install as a `Rancher Turtles` dependency (recommended)

See the `Rancher Turtles` section for installing the operator as a Helm [dependency](./install_turtles_operator.md#install-rancher-turtles-operator-with-cluster-api-operator-as-a-helm-dependency)

### Install manually with Helm (alternative)
To install `Cluster API Operator` with version `1.4.6` of the `CAPI` + `Docker` provider using helm, follow these steps:

1. Add the Helm repository for the `Cluster API Operator` by running the following command:
```bash
helm repo add capi-operator https://kubernetes-sigs.github.io/cluster-api-operator
```
2. Update the Helm repository by running the following command:
```bash
helm repo update
```
3. Install the `Cluster API Operator` using the following command, which will also install `cert-manager`:
```bash
helm install capi-operator capi-operator/cluster-api-operator
	--create-namespace -n capi-operator-system
	--set infrastructure=docker:v1.4.6
	--set core=cluster-api:v1.4.6
	--set cert-manager.enabled=true
	--timeout 90s --wait # Core Cluster API with kubeadm bootstrap and control plane providers will also be installed
```
*Note: `cert-manager` is a hard requirement for CAPI and `Cluster API Operator`*

To provide additional environment variables, choose some feature gates, or provide cloud credentials, similar to `clusterctl` [common provider](https://cluster-api.sigs.k8s.io/user/quick-start#initialization-for-common-providers), in `Cluster API Operator`, a variables secret could be used. A `name` and a `namespace` of the secret could be specified for the `Cluster API Operator`.

```bash
helm install capi-operator capi-operator/cluster-api-operator
	--create-namespace -n capi-operator-system
	--set infrastructure=docker:v1.4.6
	--set core=cluster-api:v1.4.6
	--set cert-manager.enabled=true
	--timeout 90s
	--secret-name <secret_name>
	--secret-namespace <secret_namespace>
	--wait
```

Example secret data:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: variables
  namespace: default
type: Opaque
stringData:
  CLUSTER_TOPOLOGY: "true"
  EXP_CLUSTER_RESOURCE_SET: "true"
```

To select more than one desired provider to be installed together with the `Cluster API Operator`, the `--infrastructure` flag can be specified with multiple provider names separated by a comma. For example:

```bash
helm install ... --set infrastructure="docker:v1.4.6;azure:v1.4.6"
```

The `infrastructure` flag is set to `docker:v1.4.6;azure:v1.4.6`, representing the desired provider names. This means that the `Cluster API Operator` will install and manage multiple provider systems, `Docker` and `Azure` respectively, with versions `1.4.6` specified.

For more fine-grained control of the providers and other components installed with CAPI, see the [Add the infrastructure provider](../tasks/capi-operator/add_infrastructure_provider.md) section.
