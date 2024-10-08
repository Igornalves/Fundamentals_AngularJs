# Fundamento do Angular 

Este repositorio e para apenas aprendizagem na Fremework angular para conhecimento da plataforma completa.

# Pré-requisitos

1.	**Node.js:** Angular requer Node.js para a execução de seu ambiente de desenvolvimento. O Node.js também inclui o npm (Node Package Manager), que é utilizado para instalar as dependências do projeto.

2.	**Angular CLI:**  Ferramenta de linha de comando que facilita a criação, desenvolvimento e manutenção de projetos Angular. 

**Instalando a CLI**

```javascript
npm install -g @angular/cli
```

**Criando novo projeto**

```javascript
ng new <nome-projeto>
```

**Criando um novo componente**

```java 
ng generate component <component-name>

ou 

ng g c <component-name>
```

**Dando o Start no projeto**

```
npm start
```

**Porta Padrao da Aplicacao**

```java
http://localhost:4200/
```

# Estrutura do projeto

#### Após criar um novo projeto Angular usando o Angular CLI, a estrutura básica de diretórios e arquivos é a seguinte:

- **src/**: Contém todo o código fonte da aplicação.

- **app/**: Diretório principal da aplicação onde os componentes, serviços e módulos são organizados.

- **assets/**: Diretório para armazenar arquivos estáticos, como imagens e fontes.

- **environments/**: Contém arquivos de configuração para diferentes ambientes (desenvolvimento, produção, etc.).

- **main.ts**: Arquivo de entrada principal que inicializa o módulo principal da aplicação.

- **index.html**: Página HTML principal, onde o aplicativo Angular é carregado.

- **styles.css**: Arquivo de estilos globais da aplicação.

- **angular.json**: Arquivo de configuração do Angular CLI, que define como o projeto é construído e servido.

- **package.json**: Lista as dependências do projeto e scripts de build.

<br>

# HTTP Fetch

Para realizar chamadas HTTP ao backend, vamos precisar usar um módulo especifico do Angular, o **`HttpClient`.**

O HttpClient é fornecido usando a função auxiliar `provideHttpClient`, que a maioria dos aplicativos inclui nos provedores de aplicativos em`app.config.ts.`

```javascript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};
```

Agora, para usar o HttpClient basta usarmos uma instância para realizar uma requisição.

```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CatFactsService {

  private apiUrl = 'https://cat-fact.herokuapp.com/facts';

  constructor(private http: HttpClient) { }

  getCatFacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
```

Agora podemos consumir o valor dentro do componente, usando o subscribe para esperar o retorno da chamada e então consumi-lo

```javascript
import { Component, OnInit } from '@angular/core';
import { CatFactsService } from './cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css']
})
export class CatFactsComponent implements OnInit {

  catFacts: any[] = [];

  constructor(private catFactsService: CatFactsService) { }

  ngOnInit(): void {
    this.catFactsService.getCatFacts().subscribe(
      (data) => {
        this.catFacts = data;
      },
      (error) => {
        console.error('Erro ao obter fatos sobre gatos:', error);
      }
    );
  }
}
```

