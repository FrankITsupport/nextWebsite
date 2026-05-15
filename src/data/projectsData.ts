export interface ProjectData {
  id: number;
  title: string;
  client: string;
  category: string;
  scope: string;
  role: string;
  location: string;
  result: string;
  industry: string;
  service: string;
  images: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Microsoft AI Launch',
    client: 'Microsoft',
    category: 'Corporate Launch / Stage Branding',
    scope: 'Stage backdrop, branded panels, print production, fabrication, delivery, and installation.',
    role: 'Design support, fabrication, printing, logistics, and installation.',
    location: 'Nairobi, Kenya',
    result: 'Delivered a polished launch environment ready for corporate presentation and media visibility.',
    industry: 'Technology',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/d00d02fe-b14e-41b3-a449-2a343845b293_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/cc4228d7-6440-4557-be1d-259a83097814_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/bef75076-b920-4684-96f3-94d6907cf370_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/b7630806-d869-4b04-818f-4d0a20a47846_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/aecf88f2-6881-4623-853d-95d7f4cdbfdb_optimized_small.jpg'
    ]
  },
  {
    id: 2,
    title: 'NCBA Corporate Setup',
    client: 'NCBA',
    category: 'Corporate Event / Environmental Branding',
    scope: 'Stage branding, branded walls, registration touchpoints, print production, and site setup.',
    role: 'Fabrication, large-format graphics, delivery, and installation support.',
    location: 'Nairobi, Kenya',
    result: 'Created a clean branded environment for a high-trust corporate audience.',
    industry: 'Financial Services',
    service: 'Stage, Backdrop & Media Walls',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/NCBA/optimized/WhatsApp%20Image%202025-10-09%20at%208.16.42%20PM_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/NCBA/optimized/WhatsApp%20Image%202025-10-09%20at%208.16.42%20PM%20(4)_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/NCBA/optimized/WhatsApp%20Image%202025-10-09%20at%208.16.42%20PM%20(3)_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/NCBA/optimized/WhatsApp%20Image%202025-10-09%20at%208.16.42%20PM%20(2)_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/NCBA/optimized/WhatsApp%20Image%202025-10-09%20at%208.16.42%20PM%20(1)_optimized_small.jpeg'
    ]
  },
  {
    id: 3,
    title: 'Mastercard Activation',
    client: 'Mastercard',
    category: 'Brand Activation / Experiential',
    scope: 'Activation zone, branded displays, custom counters, large-format print, and installation.',
    role: 'Custom display production, print finishing, logistics, and site execution.',
    location: 'Nairobi, Kenya',
    result: 'Built a high-impact activation space designed for visibility and attendee engagement.',
    industry: 'Financial Services',
    service: 'Brand Activations & Product Launches',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MASTERCARD/sarit%20boooth/optimized/f388ca15-b236-464f-b2e6-2e7d90a8ad14_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MASTERCARD/sarit%20boooth/optimized/bae10186-ddf5-4a92-b5b6-81120f5759af_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MASTERCARD/sarit%20boooth/optimized/87ea5172-ac05-4f48-bef5-59848e42e2f2_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MASTERCARD/sarit%20boooth/optimized/572576f1-90c6-40d6-9900-12a9b3095961_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MASTERCARD/zEN%20GARDENS/optimized/b9eb11ab-251a-4f9d-acbf-c0e158fbfd42_optimized_small.jpg'
    ]
  },
  {
    id: 4,
    title: 'AGRA Forum',
    client: 'AGRA',
    category: 'Conference / Wayfinding / Branding',
    scope: 'Conference signage, branded panels, wayfinding, delegate touchpoints, and setup support.',
    role: 'Print production, finishing, delivery coordination, and installation.',
    location: 'Nairobi, Kenya',
    result: 'Supported a professional conference environment with clear branding and navigation.',
    industry: 'NGO / Development Sector',
    service: 'Signage, Wayfinding & Environmental Branding',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/AGRA/optimized/99b1104c-97e5-46de-a11d-78c916305615_optimized_small.jpg'
    ]
  },
  {
    id: 5,
    title: 'Britam Corporate Event',
    client: 'Britam',
    category: 'Corporate Event / Brand Experience',
    scope: 'Branded event setup, display elements, print production, finishing, and installation.',
    role: 'Production planning, fabrication, branding, delivery, and setup.',
    location: 'Nairobi, Kenya',
    result: 'Delivered a finished corporate setup with strong brand presence and clean execution.',
    industry: 'Financial Services',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/PREVIOUS%20EVENTS/BRITAM%20@60/optimized/WhatsApp%20Image%202025-11-08%20at%206.02.00%20PM_optimized_small.jpeg'
    ]
  },
  {
    id: 6,
    title: 'Isuzu Activation',
    client: 'Isuzu',
    category: 'Product Launch / Brand Activation',
    scope: 'Product display area, branded signage, experiential setup, graphics, and installation.',
    role: 'Fabrication, print production, site logistics, and activation setup.',
    location: 'Nairobi, Kenya',
    result: 'Presented the brand in a structured activation space built for product visibility.',
    industry: 'Automotive',
    service: 'Brand Activations & Product Launches',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/ISUZU%20ACTIVATION/optimized/c3e4059e-43ba-4baf-bafa-597da30bfcdc_optimized_small.jpg'
    ]
  },
  {
    id: 7,
    title: 'ALU School of Business',
    client: 'ALU School of Business',
    category: 'Education / Corporate Branding',
    scope: 'Campus branding, event setup, signage, and environmental graphics.',
    role: 'Complete branding package including design, production, and installation.',
    location: 'Nairobi, Kenya',
    result: 'Established a professional educational environment with cohesive branding.',
    industry: 'Education',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/ALU%20SCHOOL%20OF%20BUSINESS/optimized/b23dd42a-e506-4cfd-a5f6-8746980a348a_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/ALU%20SCHOOL%20OF%20BUSINESS/optimized/8f22da46-ba24-4294-bcb8-3f083eb6a790_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/ALU%20SCHOOL%20OF%20BUSINESS/optimized/36a4cf37-708e-4bfd-b9d0-b1089b5704c6_optimized_small.jpg'
    ]
  },
  {
    id: 8,
    title: 'WoodNorkGreen Mice',
    client: 'WoodNorkGreen',
    category: 'Event / Experiential',
    scope: 'Complete event production including stages, lighting, audio, and branding.',
    role: 'End-to-end event production and technical support.',
    location: 'Nairobi, Kenya',
    result: 'Delivered a memorable event experience with professional execution.',
    industry: 'Entertainment',
    service: 'Event Production & Technical Services',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/WoodNorkGreen%20Mice/HOB_7915_optimized_large.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/WoodNorkGreen%20Mice/HOB_7914_optimized_large.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/WoodNorkGreen%20Mice/HOB_7901_optimized_large.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/WoodNorkGreen%20Mice/HOB_7899_optimized_large.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/WoodNorkGreen%20Mice/HOB_7898_optimized_large.jpg'
    ]
  },
  {
    id: 9,
    title: 'Custom Builds Collection',
    client: 'Various Clients',
    category: 'Custom Fabrication / Specialized Builds',
    scope: 'Custom furniture, display units, experiential elements, and unique installations.',
    role: 'Design consultation, custom fabrication, finishing, and installation.',
    location: 'Nairobi, Kenya',
    result: 'Delivered unique, high-quality custom solutions tailored to specific client needs.',
    industry: 'Multiple Industries',
    service: 'Custom Builds & Fabrication',
    images: [
      '/assets/projects%20media/Custom%20Builds/IMG_20241104_204951_optimized_medium.jpg',
      '/assets/projects%20media/Custom%20Builds/IMG_20241010_171514_optimized_medium.jpg',
      '/assets/projects%20media/Custom%20Builds/IMG_20240914_124856_optimized_large.jpg',
      '/assets/projects%20media/Custom%20Builds/IMG_20240830_222755_optimized_medium.jpg',
      '/assets/projects%20media/Custom%20Builds/IMG_20240728_014913_optimized_medium.jpg'
    ]
  },
  {
    id: 10,
    title: 'L\'Oréal Brand Experience',
    client: 'L\'Oréal',
    category: 'Beauty / Brand Activation',
    scope: 'Brand activation space, product displays, experiential zones, and visual merchandising.',
    role: 'Complete activation setup including custom displays and brand integration.',
    location: 'Nairobi, Kenya',
    result: 'Created an immersive beauty brand experience that drove engagement and sales.',
    industry: 'Beauty & Cosmetics',
    service: 'Brand Activations & Product Launches',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/L_OREAL/fEB%20aCTIVATION/optimized/2e79fdab-45b7-4196-aa27-1064338de86a_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/L_OREAL/fEB%20aCTIVATION/optimized/5b419428-3cd8-4f03-bb86-e13b1ac3f720_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/L_OREAL/fEB%20aCTIVATION/optimized/619308a7-1a41-4595-a943-dfdde5f7322d_optimized_medium.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/L_OREAL/march%20junction%20activation/optimized/0055d24b-510d-4c96-8506-7e0b7435cf88_optimized_medium.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/L_OREAL/march%20junction%20activation/optimized/09b8bf51-1c21-4104-8d19-528e62db5e51_optimized_small.jpg'
    ]
  },
  {
    id: 11,
    title: 'Maybelline Product Launch',
    client: 'Maybelline',
    category: 'Beauty / Product Launch',
    scope: 'Product launch setup, brand displays, experiential elements, and audience engagement.',
    role: 'End-to-end launch production and technical execution.',
    location: 'Nairobi, Kenya',
    result: 'Successfully launched new products with strong visual impact and audience interaction.',
    industry: 'Beauty & Cosmetics',
    service: 'Brand Activations & Product Launches',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MAYBELLINE/VALENTINES/optimized/93b05e1b-3e87-465b-a9cf-6781ac722d60_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MAYBELLINE/VALENTINES/optimized/d8f9c58e-f8f7-47cd-976e-432ec5b727f0_optimized_small.jpg'
    ]
  },
  {
    id: 12,
    title: 'Tatler Africa Event',
    client: 'Tatler Africa',
    category: 'Luxury / Lifestyle Event',
    scope: 'High-end event branding, luxury displays, VIP experiences, and premium finishes.',
    role: 'Complete luxury event production and premium brand execution.',
    location: 'Nairobi, Kenya',
    result: 'Delivered a sophisticated luxury event experience meeting premium expectations.',
    industry: 'Media & Lifestyle',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/Tatler%20Africa/optimized/36270ed2-cbc7-48c8-ad3d-788ddce38f11_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/Tatler%20Africa/optimized/5688fd60-8d07-44a9-ac2e-ae4caef0dfba_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/Tatler%20Africa/optimized/7cd280f6-1ca7-499c-9ebb-2447721445f7_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/Tatler%20Africa/optimized/b7fb9398-a9e9-4884-916e-728750b7d4a4_optimized_small.jpg'
    ]
  },
  {
    id: 13,
    title: 'Jubilee Insurance Celebration',
    client: 'Jubilee Insurance',
    category: 'Corporate / Anniversary Event',
    scope: 'Anniversary celebration setup, branded environments, milestone displays, and event theming.',
    role: 'Complete event branding and production for corporate milestone celebration.',
    location: 'Nairobi, Kenya',
    result: 'Created memorable corporate celebration environment honoring company legacy.',
    industry: 'Financial Services',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/JUBILEE/optimized/16821d64-4559-48d7-9de3-347d3ef84395_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/JUBILEE/optimized/16b157d3-d4c7-4caf-951b-c43e14d9b074_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/JUBILEE/optimized/2e63e85f-6fec-4223-a6c9-53f3fff4c8ba_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/JUBILEE/optimized/6d09bf86-c964-4304-afba-6e880789e16d_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/JUBILEE/optimized/abd26f2f-1e56-47ee-b5d9-f94965b8cbd7_optimized_small.jpg'
    ]
  },
  {
    id: 14,
    title: 'IFC International Women\'s Day',
    client: 'IFC',
    category: 'Corporate / Social Impact',
    scope: 'Women\'s Day event setup, inspirational branding, speaker platforms, and audience engagement.',
    role: 'Complete event production for international corporate social initiative.',
    location: 'Nairobi, Kenya',
    result: 'Supported impactful corporate social responsibility event with professional execution.',
    industry: 'Development Finance',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/IFC%20IWD/optimized/79649a44-de16-42cd-b769-73c57914aa6f_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/IFC%20IWD/optimized/b9c2b61b-26e4-4ebf-94b3-bd4b01980a15_optimized_medium.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/IFC%20IWD/optimized/d9389c41-34e3-420c-a3ec-36dc7f316977_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/IFC%20IWD/optimized/f27b2d04-5df6-4d50-bcf6-7f7b8d49264e_optimized_small.jpg'
    ]
  },
  {
    id: 15,
    title: 'Kenya Electricity Women\'s Day',
    client: 'Kenya Electricity',
    category: 'Corporate / Diversity Event',
    scope: 'Women\'s Day celebration, diversity recognition, branded displays, and community engagement.',
    role: 'Event production and branding for corporate diversity initiative.',
    location: 'Nairobi, Kenya',
    result: 'Delivered meaningful corporate diversity event celebrating achievements and inclusion.',
    industry: 'Energy & Utilities',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/kengen%20IWD/optimized/23eb195e-2ef3-4475-b929-e1ead5c0f6fc_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/kengen%20IWD/optimized/9d880ae9-bf1b-4412-bab9-f7f211fa4b95_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/kengen%20IWD/optimized/a0eb44c1-2ea6-4fcd-b254-bada83c71b99_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/kengen%20IWD/optimized/bf53630f-31f9-434a-ab0b-48b76d3790f0_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/kengen%20IWD/optimized/fc7e4f8e-55b4-4a56-84b9-339bb9ff71ae_optimized_small.jpg'
    ]
  },
  {
    id: 16,
    title: 'KWAL Women\'s Day Event',
    client: 'KWAL',
    category: 'Corporate / Empowerment',
    scope: 'Women\'s empowerment event, inspirational messaging, networking spaces, and celebration elements.',
    role: 'Complete production for women\'s empowerment and corporate responsibility event.',
    location: 'Nairobi, Kenya',
    result: 'Created empowering event space celebrating women\'s achievements and leadership.',
    industry: 'Corporate / NGO',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/KWAL%20IWD/optimized/1cf5cc54-010c-4bba-97bf-089107cb402a_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/KWAL%20IWD/optimized/232816f5-811d-4f22-92f7-9f452aea897c_optimized_medium.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/KWAL%20IWD/optimized/26a56f81-8998-4f49-82cc-c93fcc84bc2b_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/KWAL%20IWD/optimized/588e3994-b8e9-41b5-9f70-355456510601_optimized_medium.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/KWAL%20IWD/optimized/853b4437-33de-46d1-a20e-1d4cf8819c90_optimized_small.jpg'
    ]
  },
  {
    id: 17,
    title: 'Love Coffee Brand Activation',
    client: 'Love Coffee',
    category: 'F&B / Brand Experience',
    scope: 'Coffee brand activation, tasting stations, brand storytelling, and consumer engagement.',
    role: 'Complete brand activation setup for food and beverage client.',
    location: 'Nairobi, Kenya',
    result: 'Built engaging brand experience driving consumer connection and product interest.',
    industry: 'Food & Beverage',
    service: 'Brand Activations & Product Launches',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/LOVE%20COFFEE/optimized/50973987-d797-4a82-81a5-46adca5a024f_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/LOVE%20COFFEE/optimized/60aee734-37a3-4e74-ba47-3e84e5dbd71e_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/LOVE%20COFFEE/optimized/8510102f-d689-4009-a826-db60aee4de6c_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/LOVE%20COFFEE/optimized/a163840b-7531-4a1c-af50-1fb6c2cb75c7_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/LOVE%20COFFEE/optimized/caab72ec-1d86-4e94-b0b1-1a639bd9def8_optimized_small.jpg'
    ]
  },
  {
    id: 18,
    title: 'Magazine Booth Exhibition',
    client: 'Various Media Clients',
    category: 'Media / Exhibition',
    scope: 'Magazine display booths, publication showcases, visitor engagement, and brand representation.',
    role: 'Custom booth design and production for media industry exhibitions.',
    location: 'Nairobi, Kenya',
    result: 'Delivered professional exhibition presence for media and publishing clients.',
    industry: 'Media & Publishing',
    service: 'Booths & Exhibition Stands',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MAGAZINE%20BOOTH/optimized/28a0ed04-9c8f-4bfb-bd48-11a741864395_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/MAGAZINE%20BOOTH/optimized/b320e9c9-281c-493c-95a1-3d3503b8e979_optimized_small.jpg'
    ]
  },
  {
    id: 19,
    title: 'Fly Dubai Activation',
    client: 'Fly Dubai',
    category: 'Travel / Brand Activation',
    scope: 'Airline activation space, destination displays, travel experiences, and brand engagement.',
    role: 'Complete activation setup for travel and tourism brand.',
    location: 'Nairobi, Kenya',
    result: 'Created immersive travel brand experience inspiring wanderlust and bookings.',
    industry: 'Travel & Tourism',
    service: 'Brand Activations & Product Launches',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FLY%20DUBAI/optimized/WhatsApp%20Image%202025-10-16%20at%202.57.53%20PM_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FLY%20DUBAI/optimized/WhatsApp%20Image%202025-10-16%20at%202.57.53%20PM%20(1)_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FLY%20DUBAI/optimized/WhatsApp%20Image%202025-10-16%20at%202.57.53%20PM%20(2)_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FLY%20DUBAI/optimized/WhatsApp%20Image%202025-10-16%20at%202.57.53%20PM%20(3)_optimized_small.jpeg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FLY%20DUBAI/optimized/WhatsApp%20Image%202025-10-16%20at%202.57.53%20PM%20(4)_optimized_small.jpeg'
    ]
  },
  {
    id: 20,
    title: 'Eventor Kenya Conference',
    client: 'Eventor Kenya',
    category: 'Event Industry / Conference',
    scope: 'Event industry conference setup, networking spaces, speaker platforms, and industry showcases.',
    role: 'Complete conference production for event industry professionals.',
    location: 'Nairobi, Kenya',
    result: 'Provided professional conference environment for event industry networking and education.',
    industry: 'Event Management',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/EVENTOR%20KENYA/Krupali%20and%20Ankur/optimized/004e3ac0-34d5-4636-a4b2-c11a49fe41d1_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/EVENTOR%20KENYA/Krupali%20and%20Ankur/optimized/09ec5f1e-35f0-4088-bd7c-2c99d3adecd7_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/EVENTOR%20KENYA/Krupali%20and%20Ankur/optimized/0b84d02d-cd8a-4291-8ea7-ff0300d588b2_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/EVENTOR%20KENYA/Krupali%20and%20Ankur/optimized/1410d813-770b-47dd-9c83-61c895884253_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/EVENTOR%20KENYA/Krupali%20and%20Ankur/optimized/239775b6-4b2c-4824-a48d-d1fcb222e05f_optimized_small.jpg'
    ]
  },
  {
    id: 21,
    title: 'FSD Financial Conference',
    client: 'Financial Sector Deepening',
    category: 'Finance / Conference',
    scope: 'Financial conference setup, expert panels, networking areas, and industry presentations.',
    role: 'Complete conference production for financial sector development.',
    location: 'Nairobi, Kenya',
    result: 'Delivered professional environment for financial industry dialogue and collaboration.',
    industry: 'Financial Services',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FSD/optimized/06355c5e-72b9-4cb7-95df-e7e6dc9503d3_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FSD/optimized/37749756-40b1-401e-a1c8-6280ef2a1ed1_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FSD/optimized/f3550e3f-9d29-4e82-bf71-d4939ebf0a8d_optimized_small.jpg'
    ]
  },
  {
    id: 22,
    title: 'Future Growth Forum',
    client: 'Future Growth Forum',
    category: 'Business / Conference',
    scope: 'Business forum setup, leadership panels, innovation showcases, and networking opportunities.',
    role: 'Complete production for business leadership and innovation conference.',
    location: 'Nairobi, Kenya',
    result: 'Created dynamic environment for business innovation and leadership discussions.',
    industry: 'Business & Consulting',
    service: 'Event Branding & Corporate Setups',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FUTURE%20GROWTH%20FORUM/optimized/2b5e846f-069f-46e9-b51d-2a2bae723a8d_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FUTURE%20GROWTH%20FORUM/optimized/6bad3ef7-2a32-46bc-a456-7320250f4456_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/FUTURE%20GROWTH%20FORUM/optimized/89961c0e-6c78-486a-b4cc-dd8f202f50d1_optimized_small.jpg'
    ]
  },
  {
    id: 23,
    title: 'Doll House Fashion Show',
    client: 'Doll House Fashion',
    category: 'Fashion / Event Production',
    scope: 'Fashion show production, runway setup, lighting, audio, and brand presentation.',
    role: 'Complete fashion event production and technical execution.',
    location: 'Nairobi, Kenya',
    result: 'Delivered spectacular fashion presentation with professional production values.',
    industry: 'Fashion & Lifestyle',
    service: 'Event Production & Technical Services',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/DOLL%20HOUSE%20FASHION/optimized/14e51d7e-4cab-48bf-a08c-98bf1f1f23b0_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/DOLL%20HOUSE%20FASHION/optimized/2d81a10e-527e-4e59-b5cc-836c21905910_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/DOLL%20HOUSE%20FASHION/optimized/30c073f6-deb2-423e-a826-cda1d55e9abd_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/DOLL%20HOUSE%20FASHION/optimized/41a92bc3-c0fd-408d-8268-57ea6d8265b6_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/DOLL%20HOUSE%20FASHION/optimized/53753125-4054-4a69-9bdc-5298df0e1c70_optimized_small.jpg'
    ]
  },
  {
    id: 24,
    title: 'Alitezi Brand Activation',
    client: 'Alitezi',
    category: 'Retail / Brand Activation',
    scope: 'Retail brand activation, product displays, consumer engagement, and shopping experience.',
    role: 'Complete retail activation setup and brand experience creation.',
    location: 'Nairobi, Kenya',
    result: 'Created engaging retail environment driving brand awareness and sales.',
    industry: 'Retail & Consumer Goods',
    service: 'Brand Activations & Product Launches',
    images: [
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/ALITEZI/optimized/37f91910-7472-459e-9bf9-a88b4ea24176_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/ALITEZI/optimized/78f7e642-b344-4529-95cf-256effc2b8b3_optimized_small.jpg',
      '/assets/projects%20media/WNG-PROJECTS-VISUALS/ALITEZI/optimized/e5c7d7c3-a2ed-452f-b423-84df21e32d3b_optimized_small.jpg'
    ]
  }
];