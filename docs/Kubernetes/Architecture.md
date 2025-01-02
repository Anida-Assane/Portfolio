# Architecture d'un cluster k8s

Cette section présenteras l'architecture d'un cluster kubernetes.

![Kubernetes Architecture](https://www.opsramp.com/wp-content/uploads/2022/07/Kubernetes-Architecture.png)

Un cluster est un ensemble de ressources de se ressemblent.

Un cluster Kubernetes est un ensemble de machines, dont une au minimun joueras le role de Master node(ou control plane) et les autres de worker nodes.

### Master Node
Ses composants sont:
- kube-api-server
- kube-scheduler
- kube-controller-manager
- ETCD 
