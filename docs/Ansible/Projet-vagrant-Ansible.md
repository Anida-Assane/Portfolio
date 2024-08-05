# LAB1-IAC-VAGRANT

Ce travail représente mon premier Lab sur l'infrastructure as code avec Vagrant et Ansible. Ici, vous trouverez tous les éléments nécessaires a
la création des machines virtuelles avec Vagrant tels que les vagrantfile. L'hyperviseur de type 2 utilisé dans ce lab est Oracle Vm VirtualBox.

### Approvisionnement des VM avec Vagrant

Pour creer nos machines virtuelles, nous allons creer pour chacune d'entre elles un dossier, puis dans ce dossier, nous initialiserons le vagrantfile a l'aide de la commande ci dessous, avec comme nom de notre image **centos/7** dans le Vagrant cloud.

```
vagrant init centos/7
```

Une fois le vagrantfile crée, nous allons lancer la Vm a l'aide de la commande suivante

```
vagrant up
```

Lorsque l'on tape cette commande pour la premiere fois, le processus de création de la Vm débutera a l'aide de l'image spécifiée dans le vagrantfile.
Cette image si elle n'est pas stocké localement sur notre machine, un pull sera éffectué depuis le vagrant cloud , puis stockera l'image en local.
Ainsi, l'hyperviseur sera contacté pour créer la machine virtuelle.

Ci dessous, une vidéo explicative de l'architecture de vagrant fais a l'aide du logiciel en ligne draw.io

Une fois les machines crées, l'utilisateur pourras se connecter aux machines a l'aide de SSH grace a la commande

```
vagrant ssh
```

### Gestion de la configuration avec Ansible

Maintenant que nous avons nos machines, nous allons configurer un serveur web apache sur chaque vm.
Dans le tableau ci-dessous, nous avons les informations sur les vm tels que leurs noms et adresses ip, choses importantes pour la création du fichier d'inventaire Ansible.

| Role              |      Nom       |         @IP |
| :---------------- | :------------: | ----------: |
| Noeud de controle | **vm-control** | 192.168.0.1 |
| Hote géré 1       |    **web1**    | 192.168.0.2 |
| Hote géré 2       |    **web2**    | 192.168.0.3 |

Pour configurer nos serveurs web apaches, nous procéderont ainsi:

- Installer le paquet httpd
- Activer le service httpd
- copier un fichier web.html sur chaque serveur

> [!NOTE]
> Dans ce lab, nos serveurs sont sur centos 7

Pour la création de nos playbook, nous utiliserons les 3 modules Ansible suivant:

- yum module
- service module
- copy module

Ci-dessous, une capture d'écran de notre playbook dans lequel nous avons spécifié les taches a faire.

![Capture d'écran 2024-02-10 032028](https://github.com/Anida-Assane/LAB1-IAC-Ansible/assets/96641266/3a4d5895-1b94-4e88-8c3e-c1532dd269ab)

> [!NOTE]
> Le playbook est un fichier avec une extension .yml et commence par ---

Explication des éléments utilisés dans le playbook:

- name: permet de donner un nom au play ou a une tache
- hosts: permet de cibler les hotes sur lesquels seront éxécuter le play. Ici c'est sur toutes les 2machines donc **all** comme valeur.
- become: permet de donner les privileges a l'utilisateur afin d'éxécuter les actions
- tasks: permet de spécifier les taches a éxécuter

Pour lancer notre playbook, la commande est la suivante:

```
ansible-playbook playbook1.yml
```

Une fois le playbook éxécuté, nous allons vérifier que tout c'est bien passé, de l'installation a l'activation du servoce grace a des commandes ad hocs.

Vérification de l'installation du paquet httpd sur web1(a faire aussi sur web2)

```
ansible web1 -m command -a "rpm -qi httpd"
```

![Capture d'écran 2024-02-10 034918](https://github.com/Anida-Assane/LAB1-IAC-Ansible/assets/96641266/a59b4dfe-7147-43bc-b43c-c6247eeb2055)

Vérification de l'etat du service(a faire aussi sur web2)

```
ansible web1 -m command -a "systemctl status httpd"
```

![Capture d'écran 2024-02-10 035057](https://github.com/Anida-Assane/LAB1-IAC-Ansible/assets/96641266/957aff75-0dfc-4d23-8fec-e4d9ae3cbc16)

Vérification de la réponse du serveur apache suite a une requette http(sur le serveur web2 par exemple)

```
ansible localhost -m uri -a "url=http://192.168.0.3"
```

![Capture d'écran 2024-02-10 031944](https://github.com/Anida-Assane/LAB1-IAC-Ansible/assets/96641266/5e77f882-bc7d-4633-a8ef-85963fcd3ec8)

Et voila. Notre serveur apache est bien configuré grace a ansible et ses concepts de bases tels que les playbooks.
