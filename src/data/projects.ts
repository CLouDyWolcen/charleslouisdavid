import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "plant-inventory",
    title: "Plant Inventory and Site Visit Management System",
    description: "Comprehensive management system for Salenga Farm featuring inventory tracking, POS, and site visit coordination.",
    thumbnail: "/charleslouisdavid/images/projects/SalangePlantInventory.png",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "PHPSpreadsheet", "DomPDF", "Brevo API"],
    liveDemo: undefined,
    repository: undefined,
    details: `Full-featured Laravel application for agricultural business management built for Salenga Farm, digitizing operations for plant nursery and landscaping services.

Key Features:
• Plant Inventory Management: Real-time stock tracking with low stock monitoring (1-9 units) displayed on dashboard
• Point of Sale (POS) System: Streamlined walk-in sales with automatic stock deduction and printable receipt generation
• Request for Quotation (RFQ): Automated RFQ processing with PDF quotation generation and email delivery via Brevo API
• Site Visit Scheduling: Comprehensive coordination system with GPS integration, multi-section checklists, client document uploads, and proposal workflows
• Email Notifications: Automated transactional emails for quotations, password resets, MFA codes, and system notifications
• PDF Report Generation: Professional quotations and site visit reports with encrypted storage
• Role-Based Access Control (RBAC): Three-tier role system (super admin, admin, client) with granular page-level permissions
• Analytics Dashboard: Real-time insights including sales trends, inventory turnover, top performers, and category-based revenue analysis with dynamic period filtering

Technical Highlights:
• Built with Laravel 11 framework following MVC architecture and service layer pattern
• Implemented AES-256-CBC file encryption for secure document storage
• Developed multi-factor authentication (MFA) system with email verification, device trust, and rate limiting
• Created comprehensive audit logging system tracking all CRUD operations with before/after value capture
• Integrated Brevo API for transactional email delivery (quotations, notifications, MFA)
• Optimized database queries using Eloquent ORM with eager loading and indexed relationships
• Built Excel/CSV export functionality for inventory and sales reporting using PhpSpreadsheet

Impact:
Digitized Salenga Farm's operations including inventory management, sales transactions, customer quotations, and site visit documentation. The POS system streamlines walk-in sales with automated receipt generation and real-time stock updates. The site visit module enables seamless client collaboration through secure document sharing and proposal approval workflows.`
  },
  {
    id: "scholarship-management",
    title: "Student Scholarship Management System",
    description: "Laravel-based system for managing student scholarship records at Davao del Sur State College.",
    thumbnail: "/charleslouisdavid/images/projects/Scholarship_ManagementSystem.png",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "PHPSpreadsheet"],
    liveDemo: undefined,
    repository: undefined,
    details: `Scholarship records management platform designed for Davao del Sur State College Admission and Scholarship Office. This system digitizes scholarship record-keeping and data management.

Key Features:
• Student Scholarship Records Management: Comprehensive database of all scholarship recipients
• Excel Import/Export: Bulk data operations with PHPSpreadsheet for efficient record management
• Interactive Dashboard: Visual reports and analytics on scholarship distribution
• Advanced Search & Filtering: Multi-criteria search for quick data retrieval
• In-App Notifications: Real-time alerts for scholarship conflicts (multiple external scholarships)
• Scholarship Waiver System: Manage students with multiple scholarship conflicts
• Notification History: Track all waiver applications and resolutions
• Role-Based Access Control: Secure access for Admin and Super Admin personnel
• Bulk Update Operations: Efficiently update multiple scholarship records simultaneously
• Upload History Tracking: Monitor all data imports with detailed audit trails

Technical Highlights:
• Implemented advanced search with Eloquent query builder and complex filtering
• Created reusable Blade components for consistent UI across the application
• Built Excel import validation system with comprehensive error handling
• Optimized file uploads with Laravel storage management
• Database performance optimization with proper indexing and relationships
• Memory-optimized processing for large Excel files (10,000+ rows)
• Transaction-safe data imports to ensure data integrity

Impact:
The system serves hundreds of scholarship students, reducing manual processing time and eliminating data entry errors through automated Excel imports. The office staff can efficiently manage scholarship records, identify conflicts, and maintain accurate student scholarship data.`
  }
];
