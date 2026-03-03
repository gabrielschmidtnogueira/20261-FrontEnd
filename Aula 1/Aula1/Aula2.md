# Aula 2 — Front-End com Angular

**Data:** 02/03/2026  
**Disciplina:** Desenvolvimento Front-End  
**Projeto:** `Aula1` (Angular)

---

## 1. Visão Geral

Nesta aula o foco foi a configuração do **sistema de roteamento** do Angular. Foram criados novos componentes e o menu de navegação foi atualizado para usar as diretivas de roteamento do Angular em vez de links HTML estáticos.

---

## 2. Roteamento Angular (`AppRoutingModule`)

O arquivo `app-routing-module.ts` foi configurado com as seguintes rotas:

```typescript
const routes: Routes = [
  { path: '',           redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: Home },
  { path: 'calculadora', component: Calculadora },
  { path: 'cliente',    component: Cliente },
  { path: '**',         component: PaginaNaoEncontrada }
];
```

| Rota            | Componente            | Descrição                                   |
|-----------------|-----------------------|---------------------------------------------|
| `''`            | (redireciona)         | Redireciona para `/home` ao acessar a raiz  |
| `/home`         | `Home`                | Página inicial com carrossel e cards        |
| `/calculadora`  | `Calculadora`         | Página da calculadora                       |
| `/cliente`      | `Cliente`             | Página de clientes                          |
| `**`            | `PaginaNaoEncontrada` | Captura qualquer rota não definida (404)    |

**Conceitos utilizados:**

- `redirectTo` + `pathMatch: 'full'` — redireciona a rota raiz para `/home`
- `path: '**'` — rota curinga (*wildcard*) que captura URLs desconhecidas

---

## 3. Componentes Criados

### 3.1 Componente `Home`

- **Selector:** `app-home`
- Concentra o conteúdo da página inicial: reutiliza os componentes `Destaque` (carrossel) e `Cards`, que antes estavam diretamente no componente raiz.

```html
<app-destaque></app-destaque>
<app-cards></app-cards>
```

---

### 3.2 Componente `Calculadora`

- **Selector:** `app-calculadora`
- Componente criado e registrado, aguardando implementação da lógica.

---

### 3.3 Componente `Cliente`

- **Selector:** `app-cliente`
- Componente criado e registrado, aguardando implementação da lógica.

---

### 3.4 Componente `PaginaNaoEncontrada` (404)

- **Selector:** `app-pagina-nao-encontrada`
- Exibe uma página de erro 404 com código de erro, mensagem e botão de retorno à página inicial.

```html
<div class="container-404">
  <div class="content-404">
    <h1 class="error-code">404</h1>
    <h2 class="error-title">Página não encontrada</h2>
    <p class="error-message">A página que você está procurando não existe ou foi movida.</p>
    <a routerLink="/" class="btn-home">Voltar para a página inicial</a>
  </div>
</div>
```

---

## 4. Atualização do `AppModule`

Os quatro novos componentes foram declarados no `AppModule`:

```typescript
declarations: [
  App,
  MenuSuperior,
  Destaque,
  Cards,
  Home,          // novo
  Calculadora,   // novo
  Cliente,       // novo
  PaginaNaoEncontrada  // novo
]
```

---

## 5. Atualização do `MenuSuperior`

O menu de navegação foi refatorado para usar as diretivas de roteamento do Angular:

| Antes (Aula 1)          | Depois (Aula 2)                                          |
|-------------------------|----------------------------------------------------------|
| `href="#"`              | `routerLink="home"`                                      |
| Classe `active` estática | `routerLinkActive="active"` — aplica a classe automaticamente na rota ativa |

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a routerLink="home" routerLinkActive="active" class="nav-link">Home</a>
  </li>
  <li class="nav-item">
    <a routerLink="calculadora" routerLinkActive="active" class="nav-link">Calculadora</a>
  </li>
  <li class="nav-item">
    <a routerLink="cliente" routerLinkActive="active" class="nav-link">Clientes</a>
  </li>
</ul>
```

---

## 6. Conceitos Abordados

| Conceito                          | Descrição                                                                 |
|-----------------------------------|---------------------------------------------------------------------------|
| `Routes` / `RouterModule`         | Configuração das rotas da aplicação                                       |
| `redirectTo` + `pathMatch`        | Redireciona a rota vazia para uma rota padrão                             |
| Rota curinga `**`                 | Captura qualquer URL não mapeada (usado para página 404)                  |
| `routerLink`                      | Diretiva para navegação entre rotas sem recarregar a página               |
| `routerLinkActive`                | Aplica uma classe CSS automaticamente quando a rota está ativa            |
| `<router-outlet>`                 | Marcador no template onde o componente da rota ativa é renderizado        |
| Organização por rotas             | Separação do conteúdo em componentes dedicados por página                 |
