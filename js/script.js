document.addEventListener('DOMContentLoaded', function(){
    const mainpage=document.getElementById('Main');
    document.getElementById('Botao-Curriculo').addEventListener('click', function(){
        mainpage.innerHTML=`
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-8">
            
            <!-- Header do Currículo -->
            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-primary text-white text-center py-4">
                    <h2 class="poppins-bold mb-0">📄 Currículo Profissional</h2>
                    <p class="poppins-light mb-0 mt-2">Átila Carvalho Rocha</p>
                </div>
            </div>

            <!-- Formação -->
            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-light">
                    <h3 class="poppins-semibold mb-0 text-primary">
                        🎓 Formação Acadêmica
                    </h3>
                </div>
                <div class="card-body">
                    <div class="timeline">
                        <div class="timeline-item mb-4">
                            <div class="timeline-marker bg-primary"></div>
                            <div class="timeline-content">
                                <h5 class="poppins-medium text-dark">Universidade de Fortaleza (UNIFOR)</h5>
                                <p class="poppins-regular mb-1"><strong>Graduando em Ciência da Computação</strong></p>
                                <p class="poppins-light text-muted mb-1">5º Semestre (Agosto/2023 - Atual)</p>
                                <span class="badge bg-success">Expectativa de término: 2027</span>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker bg-secondary"></div>
                            <div class="timeline-content">
                                <h5 class="poppins-medium text-dark">Universidade Federal do Ceará (UFC) - Campus Russas</h5>
                                <p class="poppins-regular mb-1"><strong>Graduando em Ciência da Computação</strong></p>
                                <p class="poppins-light text-muted mb-1">3º Semestre (Janeiro/2022 - Dezembro/2022)</p>
                                <span class="badge bg-info">Transferência</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experiência Profissional -->
            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-light">
                    <h3 class="poppins-semibold mb-0 text-primary">
                        💼 Experiência Profissional
                    </h3>
                </div>
                <div class="card-body">
                    <div class="experience-item mb-4 p-3 border-start border-primary border-3">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="poppins-medium text-dark mb-0">Estagiário em Análise de Dados</h5>
                            <span class="badge bg-success">Atual</span>
                        </div>
                        <h6 class="poppins-regular text-primary mb-2">Tribunal de Contas do Estado do Ceará (TCE-CE)</h6>
                        <p class="poppins-light text-muted mb-2">Diretoria de Soluções Analíticas | Setembro/2024 - Atual</p>
                        <ul class="poppins-regular">
                            <li>Auxiliar nas tarefas cotidianas dos servidores e colaboradores como ETL</li>
                            <li>Criação de dashboards interativos</li>
                            <li>Explorar novas alternativas de visualização de dados (Dash/Plotly)</li>
                            <li>Testar novas tecnologias de automação e IA</li>
                        </ul>
                    </div>

                    <div class="experience-item p-3 border-start border-warning border-3">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="poppins-medium text-dark mb-0">Monitor Acadêmico</h5>
                            <span class="badge bg-warning">2024.2 - 2025.1</span>
                        </div>
                        <h6 class="poppins-regular text-primary mb-2">Álgebra Linear e Geometria Computacional - UNIFOR</h6>
                        <p class="poppins-light text-muted mb-2">Programa de Monitoria Institucional</p>
                        <ul class="poppins-regular">
                            <li>Atendimento presencial ou online para esclarecimento de dúvidas</li>
                            <li>Organização e condução dos aulões de revisão</li>
                            <li>Elaboração de material de apoio e listas de exercícios</li>
                            <li>Elaboração e apresentação de artigo científico</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Habilidades -->
            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-light">
                    <h3 class="poppins-semibold mb-0 text-primary">
                        🚀 Habilidades e Proficiências
                    </h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <h6 class="poppins-medium text-dark">💻 Linguagens de Programação</h6>
                            <div class="skill-item mb-2">
                                <span class="badge bg-primary me-2">Python</span>
                                <span class="text-muted poppins-light">Intermediário</span>
                            </div>
                            <div class="skill-item mb-2">
                                <span class="badge bg-secondary me-2">SQL</span>
                                <span class="text-muted poppins-light">Intermediário</span>
                            </div>
                            <div class="skill-item mb-2">
                                <span class="badge bg-info me-2">C</span>
                                <span class="text-muted poppins-light">Básico</span>
                            </div>
                            <div class="skill-item mb-2">
                                <span class="badge bg-warning me-2">Java</span>
                                <span class="text-muted poppins-light">Básico</span>
                            </div>
                        </div>
                        
                        <div class="col-md-6 mb-3">
                            <h6 class="poppins-medium text-dark">📚 Bibliotecas e Ferramentas</h6>
                            <div class="d-flex flex-wrap gap-2 mb-3">
                                <span class="badge bg-success">Pandas</span>
                                <span class="badge bg-success">NumPy</span>
                                <span class="badge bg-success">Dash</span>
                                <span class="badge bg-success">FastMCP</span>
                                <span class="badge bg-info">Figma</span>
                            </div>
                            
                            <h6 class="poppins-medium text-dark">🎯 Soft Skills</h6>
                            <div class="d-flex flex-wrap gap-2">
                                <span class="badge bg-outline-primary">Solucionador de Problemas</span>
                                <span class="badge bg-outline-primary">Escuta Ativa</span>
                                <span class="badge bg-outline-primary">Aprendizado Contínuo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Projetos -->
            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-light">
                    <h3 class="poppins-semibold mb-0 text-primary">
                        🛠️ Projetos em Destaque
                    </h3>
                </div>
                <div class="card-body">
                    <div class="project-item mb-4 p-3 bg-light rounded">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="poppins-medium text-dark">Painel IEGM</h5>
                            <span class="badge bg-warning">Em Desenvolvimento</span>
                        </div>
                        <p class="poppins-regular mb-2">
                            Ambiente simples para o cidadão entender como seu município performa no IEGM. 
                            Permite comparar cidades, visualizar performance temporal e acessar explicações objetivas.
                        </p>
                        <a href="https://www.instagram.com/p/DMQDM1cu-wG/?utm_source=ig_web_copy_link&igsh=ZXgwYWE0Z3h2bXQ=" 
                            class="btn btn-outline-primary btn-sm">
                            📱 Ver no Instagram
                        </a>
                    </div>

                    <div class="project-item p-3 bg-light rounded">
                        <h5 class="poppins-medium text-dark">Artigo Científico - MCP</h5>
                        <p class="poppins-regular mb-0">
                            <strong>"A Eficácia e Limitações do Servidor Model Context Protocol (MCP) na Resolução de problemas de Álgebra e Geometria Computacional"</strong>
                        </p>
                        <p class="poppins-light text-muted">
                            Investigação sobre eficácia e limitações de servidor MCP na disciplina de Álgebra e Geometria Computacional.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Idiomas e Cursos -->
            <div class="row">
                <div class="col-md-6">
                    <div class="card mb-4 shadow-sm h-100">
                        <div class="card-header bg-light">
                            <h3 class="poppins-semibold mb-0 text-primary">
                                �� Idiomas
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="language-item mb-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="poppins-medium">🇧🇷 Português</span>
                                    <span class="badge bg-success">Nativo</span>
                                </div>
                            </div>
                            <div class="language-item">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="poppins-medium">🇺🇸 Inglês</span>
                                    <span class="badge bg-primary">Intermediário</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card mb-4 shadow-sm h-100">
                        <div class="card-header bg-light">
                            <h3 class="poppins-semibold mb-0 text-primary">
                                📜 Certificações
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="cert-item mb-3">
                                <h6 class="poppins-medium text-dark mb-1">Python para Data Science</h6>
                                <p class="poppins-light text-muted mb-1">Data Science Academy</p>
                                <small class="text-muted">Set/2024 - Nov/2024</small>
                            </div>
                            <div class="cert-item">
                                <h6 class="poppins-medium text-dark mb-1">Figma para Iniciantes</h6>
                                <p class="poppins-light text-muted mb-1">LearningLab - UFC Russas</p>
                                <small class="text-muted">Jun/2022</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Trabalho Voluntário -->
            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-light">
                    <h3 class="poppins-semibold mb-0 text-primary">
                        🤝 Experiência Voluntária
                    </h3>
                </div>
                <div class="card-body">
                    <div class="volunteer-item p-3 border-start border-success border-3">
                        <h5 class="poppins-medium text-dark">Mídias Sociais - TOP</h5>
                        <h6 class="poppins-regular text-success mb-2">Time Organizacional Publicitário - UFC Russas</h6>
                        <p class="poppins-light text-muted mb-2">Maio/2022 - Dezembro/2022</p>
                        <p class="poppins-regular mb-2">
                            Programa de extensão universitária focado em criação de conteúdo, 
                            cobertura de eventos e administração de perfis no Instagram.
                        </p>
                        <div class="d-flex gap-2">
                            <a href="https://www.instagram.com/ufcrussas"  
                               class="btn btn-outline-success btn-sm">@ufcrussas</a>
                            <a href="https://www.instagram.com/top.ufcrussas"  
                               class="btn btn-outline-success btn-sm">@top.ufcrussas</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;
    });
        

});

