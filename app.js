// Timeline events data
const timelineEvents = [
  {
    date: "2020-05",
    year: 2020,
    title: "OpenAI Launches GPT-3",
    category: "Language Models",
    description: "OpenAI released GPT-3, a groundbreaking 175-billion-parameter language model that marked a significant leap in generative AI. GPT-3 demonstrated unprecedented ability to generate human-like text, write code, and perform various language tasks with minimal examples. This model popularized large-scale generative AI and sparked early enterprise interest in applying AI to diverse tasks.",
    impact: "Revolutionized natural language processing and set the foundation for the modern generative AI boom.",
    sources: [
      {
        name: "QTeam Solutions - AI Breakthroughs 2020",
        url: "https://qteam.solutions/the-most-important-ai-breakthroughs-in-2020/"
      },
      {
        name: "Silicon Eight - Major AI Events 2018-2025",
        url: "https://www.silenteight.com/explore-learn/major-events-in-ai-2018-2025"
      }
    ]
  },
  {
    date: "2020-11",
    year: 2020,
    title: "DeepMind's AlphaFold 2 Solves Protein Folding",
    category: "Scientific AI",
    description: "DeepMind's AlphaFold 2 achieved a breakthrough in computational biology by accurately predicting protein structures from amino acid sequences. At the CASP14 competition, AlphaFold 2 scored above 90% on the Global Distance Test for approximately two-thirds of proteins tested, effectively solving the 50-year-old protein folding problem. This achievement has revolutionary implications for drug discovery, disease understanding, and biological research.",
    impact: "Named Science's 2021 Breakthrough of the Year; accelerated drug discovery and biomedical research globally.",
    sources: [
      {
        name: "Nature - AlphaFold Paper",
        url: "https://www.nature.com/articles/s41586-021-03819-2"
      },
      {
        name: "Science Magazine - 2021 Breakthrough",
        url: "https://www.science.org/content/article/breakthrough-2021"
      },
      {
        name: "AI Magazine - AlphaFold Nobel Prize",
        url: "https://aimagazine.com/articles/alphafold-2-the-ai-system-that-won-google-a-nobel-prize"
      }
    ]
  },
  {
    date: "2021-01",
    year: 2021,
    title: "DALL-E Image Generation Debuts",
    category: "Generative AI",
    description: "OpenAI introduced DALL-E, the first major text-to-image AI model capable of generating images from textual descriptions. Using a modified version of GPT-3, DALL-E demonstrated the potential for AI to create detailed, imaginative images based on simple text prompts, opening new possibilities for creative applications of artificial intelligence.",
    impact: "Pioneered the text-to-image generation field and inspired subsequent models like DALL-E 2, Midjourney, and Stable Diffusion.",
    sources: [
      {
        name: "Wikipedia - DALL-E",
        url: "https://en.wikipedia.org/wiki/DALL-E"
      },
      {
        name: "ACS College - AI Breakthroughs",
        url: "https://www.acs-college.com/the-latest-stunning-breakthroughs-in-ai"
      }
    ]
  },
  {
    date: "2021-01",
    year: 2021,
    title: "OpenAI Introduces CLIP Vision-Language Model",
    category: "Scientific AI",
    description: "OpenAI released CLIP (Contrastive Language-Image Pre-training), a neural network that learns visual concepts from natural language supervision. Trained on 400 million image-text pairs, CLIP connects images and text in a shared embedding space, enabling zero-shot image classification without task-specific training. CLIP can classify images by matching them with text descriptions, revolutionizing how AI understands the relationship between vision and language. This model became foundational for many multimodal systems and influenced subsequent research in vision-language AI.",
    impact: "Pioneered vision-language understanding; became the standard vision encoder for multimodal models like GPT-4 and DALL-E.",
    sources: [
      {
        name: "OpenAI - CLIP Announcement",
        url: "https://openai.com/index/clip/"
      },
      {
        name: "Lightly AI - CLIP Model Guide",
        url: "https://www.lightly.ai/blog/clip-openai"
      },
      {
        name: "GitHub - CLIP Repository",
        url: "https://github.com/openai/CLIP"
      }
    ]
  },
  {
    date: "2021-06",
    year: 2021,
    title: "GitHub Copilot Technical Preview Launches",
    category: "Open Source AI",
    description: "GitHub and OpenAI launched GitHub Copilot, the world's first AI pair programmer, as a technical preview on June 29, 2021. Powered by OpenAI Codex (a modified version of GPT-3), Copilot autocompletes code in real-time within IDEs like Visual Studio Code. The tool suggests whole lines or entire functions based on context, helping developers write code faster and explore new APIs without tedious searches. Copilot became generally available on June 21, 2022, democratizing access to AI-assisted coding for millions of developers worldwide.",
    impact: "Transformed software development workflows; demonstrated AI's capability to assist in complex creative tasks like programming.",
    sources: [
      {
        name: "Wikipedia - GitHub Copilot",
        url: "https://en.wikipedia.org/wiki/GitHub_Copilot"
      },
      {
        name: "GitHub Blog - Introducing Copilot",
        url: "https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/"
      },
      {
        name: "TL Consulting - Copilot Evolution",
        url: "https://tlconsulting.com.au/blogs/the-evolution-of-github-copilot-from-code-suggestions-to-ai-pair-programming/"
      }
    ]
  },
  {
    date: "2022-02",
    year: 2022,
    title: "DeepMind's AlphaCode Achieves Competitive Programming Milestone",
    category: "Scientific AI",
    description: "DeepMind released AlphaCode in February 2022, published in Science in December 2022, marking the first time an AI system reached competitive performance in programming competitions. AlphaCode achieved an average ranking in the top 54.3% of participants in real-world Codeforces competitions with over 5,000 participants, earning an estimated rating of 1238. The system generates millions of diverse program solutions using transformer-based models, then filters and clusters them intelligently. This demonstrated AI's growing ability to solve novel problems requiring critical thinking, logic, algorithms, and natural language understanding.",
    impact: "First AI to perform competitively against human programmers in complex problem-solving; advanced code generation capabilities.",
    sources: [
      {
        name: "DeepMind - AlphaCode Blog",
        url: "https://deepmind.google/discover/blog/competitive-programming-with-alphacode/"
      },
      {
        name: "Science - AlphaCode Paper",
        url: "https://www.science.org/doi/10.1126/science.abq1158"
      },
      {
        name: "arXiv - AlphaCode Technical Paper",
        url: "https://arxiv.org/abs/2203.07814"
      }
    ]
  },
  {
    date: "2022-04",
    year: 2022,
    title: "DALL-E 2 Released",
    category: "Generative AI",
    description: "OpenAI released DALL-E 2, a significantly improved text-to-image model that generates more realistic images at higher resolutions (up to 1024x1024 pixels). DALL-E 2 can combine concepts, attributes, and styles, and introduced capabilities for image editing (inpainting) and variation generation. The model was made available to the public in beta in July 2022, democratizing access to advanced AI image generation.",
    impact: "Sparked mainstream interest in AI-generated art and laid groundwork for the creative AI revolution.",
    sources: [
      {
        name: "OpenAI - DALL-E 2 Announcement",
        url: "https://openai.com/index/dall-e-2/"
      },
      {
        name: "MIT News - AI Image Generation",
        url: "https://news.mit.edu/2022/ai-system-makes-models-like-dall-e-2-more-creative-0908"
      }
    ]
  },
  {
    date: "2022-08",
    year: 2022,
    title: "Stable Diffusion Goes Open Source",
    category: "Generative AI",
    description: "Stability AI released Stable Diffusion, the first major open-source text-to-image model. Unlike proprietary systems like DALL-E 2, Stable Diffusion's code and model weights were made freely available, allowing it to run on consumer hardware with as little as 2.4GB VRAM. This democratization of AI image generation technology sparked an explosion of community-driven innovation and widespread adoption.",
    impact: "Democratized AI image generation by making powerful models accessible to anyone; generated billions of images within the first year.",
    sources: [
      {
        name: "Wikipedia - Stable Diffusion",
        url: "https://en.wikipedia.org/wiki/Stable_Diffusion"
      },
      {
        name: "Stability AI - One Year Anniversary",
        url: "https://stability.ai/news/celebrating-one-year-of-stable-diffusion"
      }
    ]
  },
  {
    date: "2022-11",
    year: 2022,
    title: "ChatGPT Launches and Goes Viral",
    category: "Language Models",
    description: "OpenAI released ChatGPT on November 30, 2022, based on the GPT-3.5 model. The chatbot quickly became a global phenomenon, reaching 1 million users in just 5 days and 100 million users within two months—the fastest adoption of any consumer application in history. ChatGPT's conversational interface made advanced AI accessible to the general public for the first time, sparking widespread discussion about AI's potential and risks.",
    impact: "Triggered the mainstream AI revolution; fundamentally changed public perception and adoption of AI technology.",
    sources: [
      {
        name: "Wikipedia - ChatGPT",
        url: "https://en.wikipedia.org/wiki/ChatGPT"
      },
      {
        name: "Search Engine Journal - ChatGPT Timeline",
        url: "https://www.searchenginejournal.com/history-of-chatgpt-timeline/488370/"
      },
      {
        name: "Scribbr - ChatGPT Release",
        url: "https://www.scribbr.com/frequently-asked-questions/when-was-chatgpt-released/"
      }
    ]
  },
  {
    date: "2022-12",
    year: 2022,
    title: "Google Announces Med-PaLM Medical AI",
    category: "Scientific AI",
    description: "Google Research and DeepMind introduced Med-PaLM in December 2022, the first AI system to surpass the passing threshold (67.5% accuracy, requiring 60%) on US Medical Licensing Examination (USMLE) style questions. Built on Google's PaLM language model and fine-tuned with medical expert demonstrations using the MultiMedQA dataset, Med-PaLM generates accurate, helpful long-form answers to medical questions. The model was later upgraded to Med-PaLM 2, which achieved expert-level performance at 85.4% accuracy on medical exam benchmarks, matching human expert test-takers.",
    impact: "Demonstrated AI's potential to assist healthcare professionals; first AI to achieve passing medical licensing exam scores.",
    sources: [
      {
        name: "Google Research - Med-PaLM",
        url: "https://sites.research.google/med-palm/"
      },
      {
        name: "Google Cloud Blog - Med-PaLM 2",
        url: "https://cloud.google.com/blog/topics/healthcare-life-sciences/sharing-google-med-palm-2-medical-large-language-model"
      },
      {
        name: "Nature - Med-PaLM Paper",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11922739/"
      }
    ]
  },
  {
    date: "2023-02",
    year: 2023,
    title: "Meta Releases LLaMA Open-Source Language Models",
    category: "Open Source AI",
    description: "Meta AI announced LLaMA (Large Language Model Meta AI) on February 24, 2023, releasing foundation models with 7B, 13B, 33B, and 65B parameters. LLaMA was designed to be more accessible by running efficiently on consumer hardware. The 13B parameter model matched GPT-3 (175B) performance on most benchmarks despite being much smaller. Released initially to researchers on a case-by-case basis, LLaMA's weights quickly leaked online, spurring massive community innovation. This release challenged the dominance of proprietary models and catalyzed the open-source AI movement.",
    impact: "Sparked the open-source LLM revolution; demonstrated that smaller, efficiently-trained models could rival larger proprietary systems.",
    sources: [
      {
        name: "Wikipedia - LLaMA",
        url: "https://en.wikipedia.org/wiki/Llama_(language_model)"
      },
      {
        name: "Meta AI - LLaMA 3 Blog",
        url: "https://ai.meta.com/blog/meta-llama-3/"
      },
      {
        name: "Meet Cody - LLaMA 2 Overview",
        url: "https://meetcody.ai/blog/llama-2-metas-open-source-ai-model/"
      }
    ]
  },
  {
    date: "2023-03",
    year: 2023,
    title: "GPT-4 and Anthropic's Claude Launch",
    category: "Language Models",
    description: "OpenAI released GPT-4 on March 14, 2023, the first multimodal large language model capable of processing both text and images. GPT-4 demonstrated significant improvements over GPT-3.5, scoring in the top 10% on the bar exam (vs. bottom 10% for GPT-3.5) and showing enhanced reasoning capabilities. Simultaneously, Anthropic launched Claude in March 2023, an AI assistant focused on being helpful, honest, and harmless, offering an alternative approach to AI safety.",
    impact: "Established multimodal AI as the new standard; intensified competition in the AI industry.",
    sources: [
      {
        name: "Wikipedia - GPT-4",
        url: "https://en.wikipedia.org/wiki/GPT-4"
      },
      {
        name: "TechCrunch - GPT-4 Release",
        url: "https://techcrunch.com/2023/03/14/openai-releases-gpt-4-ai-that-it-claims-is-state-of-the-art/"
      },
      {
        name: "Anthropic - Introducing Claude",
        url: "https://www.anthropic.com/news/introducing-claude"
      }
    ]
  },
  {
    date: "2023-07",
    year: 2023,
    title: "Meta Releases LLaMA 2 for Commercial Use",
    category: "Open Source AI",
    description: "On July 18, 2023, Meta released LLaMA 2 in partnership with Microsoft, marking a major shift by making the models freely available for most commercial applications. Released in 7B, 13B, and 70B parameter sizes, LLaMA 2 was trained on 40% more data than the original. For the first time, Meta included both foundation models and instruction-tuned chat variants. Microsoft integrated LLaMA 2 into Azure, and major cloud providers (AWS, Google Cloud) quickly added support. This accessibility accelerated enterprise adoption of open-source AI and challenged closed-source providers.",
    impact: "Made high-quality AI models accessible for commercial use; established Meta as leader in open-source AI ecosystem.",
    sources: [
      {
        name: "Wikipedia - LLaMA",
        url: "https://en.wikipedia.org/wiki/Llama_(language_model)"
      },
      {
        name: "Meet Cody - LLaMA 2 Analysis",
        url: "https://meetcody.ai/blog/llama-2-metas-open-source-ai-model/"
      },
      {
        name: "Meta AI - LLaMA Usage Growth",
        url: "https://ai.meta.com/blog/llama-usage-doubled-may-through-july-2024/"
      }
    ]
  },
  {
    date: "2023-09",
    year: 2023,
    title: "Mistral AI Releases Mistral 7B",
    category: "Open Source AI",
    description: "French startup Mistral AI released Mistral 7B, a 7-billion-parameter open-source language model that outperformed models with up to 13 billion parameters on standard benchmarks. Released under the Apache 2.0 license with no usage restrictions, Mistral 7B demonstrated that smaller, efficiently-trained models could rival larger proprietary systems, advancing the open-source AI movement in Europe.",
    impact: "Established European leadership in open-source AI; proved small models can achieve competitive performance.",
    sources: [
      {
        name: "Mistral AI - About Mistral",
        url: "https://mistral.ai/news/about-mistral-ai"
      },
      {
        name: "Mistral AI - Mixtral of Experts",
        url: "https://mistral.ai/news/mixtral-of-experts"
      }
    ]
  },
  {
    date: "2023-10",
    year: 2023,
    title: "Biden Signs AI Executive Order",
    category: "AI Regulation",
    description: "On October 30, 2023, President Joe Biden signed Executive Order 14110 on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence—the most comprehensive AI governance document in U.S. history at 110 pages. The order established new safety standards, required AI developers to share test results with the government, created Chief AI Officer positions across federal agencies, and invoked the Defense Production Act to manage AI risks. The order was later rescinded by President Trump in January 2025.",
    impact: "Set the foundation for U.S. AI governance framework; influenced global AI policy discussions.",
    sources: [
      {
        name: "Wikipedia - Executive Order 14110",
        url: "https://en.wikipedia.org/wiki/Executive_Order_14110"
      },
      {
        name: "White House Archives - EO Text",
        url: "https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/"
      },
      {
        name: "Brookings - One Year Later Analysis",
        url: "https://www.brookings.edu/articles/one-year-later-how-has-the-white-house-ai-executive-order-delivered-on-its-promises/"
      }
    ]
  },
  {
    date: "2023-11",
    year: 2023,
    title: "First Global AI Safety Summit at Bletchley Park",
    category: "AI Regulation",
    description: "The United Kingdom hosted the first-ever global AI Safety Summit at the historic Bletchley Park on November 1-2, 2023. Representatives from 28 countries including the U.S., China, and the EU signed the Bletchley Declaration, establishing international cooperation to manage AI risks, particularly from 'frontier AI' systems. The summit addressed concerns about AI's potential use in terrorism, warfare, and existential risks to humanity, and led to the establishment of AI Safety Institutes in multiple countries.",
    impact: "First international agreement on AI safety cooperation; established framework for ongoing global AI governance.",
    sources: [
      {
        name: "Wikipedia - AI Safety Summit",
        url: "https://en.wikipedia.org/wiki/AI_Safety_Summit"
      },
      {
        name: "UK Government - AI Safety Summit",
        url: "https://www.gov.uk/government/topical-events/ai-safety-summit-2023"
      },
      {
        name: "The Lancet - Summit Coverage",
        url: "https://www.thelancet.com/journals/landig/article/PIIS2589-7500(24)00001-3/fulltext"
      }
    ]
  },
  {
    date: "2023-12",
    year: 2023,
    title: "Google Launches Gemini",
    category: "Language Models",
    description: "Google unveiled Gemini on December 6, 2023, its most advanced and capable AI model family. Gemini came in three versions: Ultra (most powerful), Pro (balanced), and Nano (lightweight for devices). As a natively multimodal model trained on text, images, audio, video, and code simultaneously, Gemini Ultra became the first model to surpass human expert performance on the 57-subject MMLU test with a 90% score. Gemini Pro immediately powered Google's Bard chatbot.",
    impact: "Google's major response to ChatGPT; advanced multimodal AI capabilities and integration across Google products.",
    sources: [
      {
        name: "Wikipedia - Gemini",
        url: "https://en.wikipedia.org/wiki/Gemini_(language_model)"
      },
      {
        name: "Google Blog - Introducing Gemini",
        url: "https://blog.google/technology/ai/google-gemini-ai/"
      },
      {
        name: "The Verge - Gemini Launch",
        url: "https://www.theverge.com/2023/12/6/23990466/google-gemini-llm-ai-model"
      }
    ]
  },
  {
    date: "2024-02",
    year: 2024,
    title: "OpenAI Previews Sora Text-to-Video Model",
    category: "Generative AI",
    description: "OpenAI introduced Sora on February 15, 2024, a groundbreaking text-to-video generation model capable of creating realistic videos up to one minute long from text descriptions. Sora demonstrated unprecedented capabilities in understanding physics, maintaining object permanence, and simulating realistic 3D environments. The model used a transformer architecture operating on spacetime patches and could generate videos at various resolutions and aspect ratios up to 1920x1080p.",
    impact: "Breakthrough in video generation AI; demonstrated path toward AI systems that understand and simulate the physical world.",
    sources: [
      {
        name: "OpenAI - Sora Technical Report",
        url: "https://openai.com/index/video-generation-models-as-world-simulators/"
      },
      {
        name: "Wikipedia - Sora",
        url: "https://en.wikipedia.org/wiki/Sora_(text-to-video_model)"
      }
    ]
  },
  {
    date: "2024-03",
    year: 2024,
    title: "Anthropic Releases Claude 3 Family",
    category: "Language Models",
    description: "Anthropic released Claude 3 on March 4, 2024, introducing three models: Opus (most capable), Sonnet (balanced), and Haiku (fastest). Claude 3 set new industry benchmarks, with Opus outperforming GPT-4 on several tests. The models featured improved reasoning, reduced hallucinations, near-instant responses, and the ability to process up to 200,000 tokens (roughly 150,000 words). All three models could analyze images alongside text, marking Anthropic's entry into multimodal AI.",
    impact: "Established Anthropic as a major AI competitor; raised the bar for AI safety and performance.",
    sources: [
      {
        name: "OpenCV - Claude 3 Overview",
        url: "https://opencv.org/blog/anthropic-claude-3/"
      },
      {
        name: "Wikipedia - Anthropic",
        url: "https://en.wikipedia.org/wiki/Anthropic"
      }
    ]
  },
  {
    date: "2024-08",
    year: 2024,
    title: "EU AI Act Enters Into Force",
    category: "AI Regulation",
    description: "The European Union's Artificial Intelligence Act, the world's first comprehensive horizontal AI legislation, entered into force on August 1, 2024. The regulation establishes a risk-based framework classifying AI systems into four levels: unacceptable (banned), high-risk (heavily regulated), limited-risk (transparency required), and minimal-risk (unregulated). The Act applies extraterritorially to any AI system affecting EU citizens, with phased compliance deadlines through 2027 and fines up to 7% of global revenue for violations.",
    impact: "Established world's first comprehensive AI legal framework; influenced global AI regulation standards (Brussels Effect).",
    sources: [
      {
        name: "Wikipedia - AI Act",
        url: "https://en.wikipedia.org/wiki/Artificial_Intelligence_Act"
      },
      {
        name: "CNIL - AI Act Entry Into Force",
        url: "https://www.cnil.fr/en/entry-force-european-ai-regulation-first-questions-and-answers-cnil"
      },
      {
        name: "EY - EU AI Act Guide",
        url: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gl/insights/public-policy/documents/ey-gl-eu-ai-act-07-2024.pdf"
      }
    ]
  },
  {
    date: "2024-12",
    year: 2024,
    title: "OpenAI Releases Sora to the Public",
    category: "Generative AI",
    description: "On December 9, 2024, OpenAI publicly launched Sora (Sora Turbo) at sora.com after months of limited preview. Users can generate videos up to 20 seconds long at 1080p resolution in various aspect ratios. The release included advanced features like storyboarding, video remixing, and asset blending. Sora can extend existing videos, animate still images, and create seamless transitions between different scenes, representing a major milestone in AI's ability to simulate reality.",
    impact: "Made advanced AI video generation accessible to consumers; demonstrated AI's growing understanding of physical world dynamics.",
    sources: [
      {
        name: "OpenAI - Sora is Here",
        url: "https://openai.com/index/sora-is-here/"
      }
    ]
  },
  {
    date: "2025-09",
    year: 2025,
    title: "OpenAI Releases Sora 2 with Audio",
    category: "Generative AI",
    description: "OpenAI launched Sora 2 on September 29, 2025, marking a leap from GPT-3.5 level to what the company calls the 'GPT-3.5 moment' for video generation. Sora 2 features synchronized dialogue and sound effects, dramatically improved physical accuracy (modeling buoyancy, gravity, rigidity), and the ability to integrate real people into AI-generated environments while maintaining their appearance and voice. The model can follow complex multi-shot instructions while maintaining scene coherence.",
    impact: "Breakthrough in physically accurate video synthesis with audio; advanced AI world simulation capabilities.",
    sources: [
      {
        name: "OpenAI - Sora 2 Announcement",
        url: "https://openai.com/index/sora-2/"
      }
    ]
  },
  {
    date: "2025-10",
    year: 2025,
    title: "AI Adoption Reaches 78% of Organizations",
    category: "Industry Trends",
    description: "According to Stanford's 2025 AI Index Report, organizational AI adoption surged to 78% in 2024, up from 55% the previous year. AI business usage accelerated dramatically across sectors, with generative AI attracting $33.9 billion in global private investment (18.7% increase from 2023). The U.S. led with $109.1 billion in AI investment. Performance on major AI benchmarks showed rapid improvement, with some tests seeing increases of 18-67 percentage points in just one year, while AI models began outperforming humans in certain programming tasks.",
    impact: "Marked AI's transition from experimental technology to mainstream business tool; demonstrated accelerating pace of AI capability improvement.",
    sources: [
      {
        name: "Stanford HAI - 2025 AI Index",
        url: "https://hai.stanford.edu/ai-index/2025-ai-index-report"
      },
      {
        name: "Microsoft - 6 AI Trends for 2025",
        url: "https://news.microsoft.com/source/features/ai/6-ai-trends-youll-see-more-of-in-2025/"
      }
    ]
  }
];

// Global variables
let currentFilter = 'all';
let animationObserver;

// Utility functions
function formatDate(dateString) {
  const [year, month] = dateString.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

function getCategoryClass(category) {
  return `category--${category.toLowerCase().replace(/\s+/g, '-')}`;
}

function truncateText(text, maxLength = 120) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

// Filter button rendering
function renderFilterButtons() {
  const categories = ['all', ...new Set(timelineEvents.map(e => e.category))];
  const filterContainer = document.getElementById('filterButtons');
  
  const buttonsHTML = categories.map(category => {
    const displayName = category === 'all' ? 'All Events' : category;
    const activeClass = category === 'all' ? 'active' : '';
    return `<button class="filter-btn ${activeClass}" data-category="${category}">${displayName}</button>`;
  }).join('');
  
  filterContainer.innerHTML = buttonsHTML;
}

// Timeline rendering functions
function renderYearMarker(year) {
  return `
    <div class="year-marker">
      <div class="year-marker__year">${year}</div>
    </div>
  `;
}

function renderTimelineEvent(event, index) {
  const isLeft = index % 2 === 0;
  const categoryClass = getCategoryClass(event.category);
  const formattedDate = formatDate(event.date);
  const preview = truncateText(event.description);
  
  return `
    <div class="timeline-event timeline-event--${isLeft ? 'left' : 'right'}" data-category="${event.category}">
      <div class="timeline-event__dot"></div>
      <div class="timeline-event__content" data-event-index="${index}">
        <div class="timeline-event__date">${formattedDate}</div>
        <h3 class="timeline-event__title">${event.title}</h3>
        <div class="timeline-event__category ${categoryClass}">${event.category}</div>
        <p class="timeline-event__preview">${preview}</p>
        <a href="#" class="timeline-event__read-more" data-event-index="${index}">
          Read More
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>
    </div>
  `;
}

function renderTimeline() {
  const timeline = document.querySelector('.timeline');
  let currentYear = null;
  let eventIndex = 0;
  let html = '<div class="timeline__line"></div>';
  
  // Group events by year and render
  timelineEvents.forEach(event => {
    if (event.year !== currentYear) {
      html += renderYearMarker(event.year);
      currentYear = event.year;
    }
    html += renderTimelineEvent(event, eventIndex);
    eventIndex++;
  });
  
  timeline.innerHTML = html;
}

// Modal functions
function openModal(eventIndex) {
  const event = timelineEvents[eventIndex];
  const modal = document.getElementById('eventModal');
  const categoryClass = getCategoryClass(event.category);
  const formattedDate = formatDate(event.date);
  
  // Populate modal content
  modal.querySelector('.modal__title').textContent = event.title;
  modal.querySelector('.modal__date').textContent = formattedDate;
  modal.querySelector('.modal__category').textContent = event.category;
  modal.querySelector('.modal__category').className = `modal__category ${categoryClass}`;
  modal.querySelector('.modal__description').textContent = event.description;
  modal.querySelector('.modal__impact-text').textContent = event.impact;
  
  // Populate sources
  const sourcesList = modal.querySelector('.modal__sources-list');
  sourcesList.innerHTML = event.sources.map(source => 
    `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.name}</a></li>`
  ).join('');
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('eventModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Filtering functions
function filterEvents(category) {
  currentFilter = category;
  const events = document.querySelectorAll('.timeline-event');
  
  events.forEach(event => {
    const eventCategory = event.dataset.category;
    if (category === 'all' || eventCategory === category) {
      event.classList.remove('hidden');
    } else {
      event.classList.add('hidden');
    }
  });
  
  // Update filter button states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// Animation functions
function initAnimationObserver() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, options);
  
  // Observe all timeline events
  document.querySelectorAll('.timeline-event').forEach(event => {
    animationObserver.observe(event);
  });
}

// Event listeners
function attachEventListeners() {
  // Filter button listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterEvents(btn.dataset.category);
    });
  });
  
  // Timeline event listeners
  document.addEventListener('click', (e) => {
    if (e.target.closest('.timeline-event__read-more') || e.target.closest('.timeline-event__content')) {
      e.preventDefault();
      const eventIndex = parseInt(e.target.closest('[data-event-index]').dataset.eventIndex);
      openModal(eventIndex);
    }
  });
  
  // Modal listeners
  document.querySelector('.modal__close').addEventListener('click', closeModal);
  
  document.getElementById('eventModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });
  
  // Escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Initialize the application
function init() {
  renderFilterButtons();
  renderTimeline();
  attachEventListeners();
  
  // Delay animation observer to let DOM settle
  setTimeout(() => {
    initAnimationObserver();
  }, 100);
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}