// ============================================================
// SOLAR SYSTEM AGENTS — MISSION CONTROL CONFIGURATION
// ============================================================
// Edit this file to configure your Mission Control dashboard.
// Documentation: https://github.com/roomsterdam/solar-system-agents
// ============================================================

const CONFIG = {

  // ── BRANDING ──────────────────────────────────────────────
  brand: {
    name: 'SOLAR SYSTEM',           // Top-left logo text
    subtitle: 'MISSION CONTROL',     // Below logo
    version: 'v1.0.0',              // Version badge
    centerTitle: 'AI AGENT HQ',     // Top bar center text
  },

  // ── GATEWAY / API ─────────────────────────────────────────
  // If you have a live endpoint that returns agent status JSON,
  // set it here. Leave null for demo/static mode.
  gateway: {
    url: null,                       // e.g. 'http://localhost:8080'
    healthEndpoint: '/health',       // Health check path
    statusEndpoint: '/api/status',   // Agent status JSON path
    token: null,                     // Optional auth token
    refreshInterval: 15000,          // Poll every 15 seconds
  },

  // ── AGENTS ────────────────────────────────────────────────
  // Define your AI agents here. Each agent appears as a card
  // in the left roster panel.
  //
  // Fields:
  //   id        — unique identifier (used for status matching)
  //   name      — display name (shown in roster)
  //   model     — AI model being used
  //   role      — short description of what this agent does
  //   tier      — 'command' | 'operations' | 'support' (groups in roster)
  //   premium   — true for highlighted card with gradient border
  //   skills    — number of skills/tools available
  //   channels  — array of channel tags: 'TG', 'WA', 'DISC', 'SLACK', 'API'
  //   status    — 'active' | 'idle' | 'error' | 'dormant'
  //   heartbeat — heartbeat interval description (e.g. '90m')

  agents: [
    {
      id: 'coordinator',
      name: 'COORDINATOR',
      model: 'gpt-4o',
      role: 'Central orchestrator & task routing',
      tier: 'command',
      premium: true,
      skills: 12,
      channels: ['API', 'SLACK'],
      status: 'active',
      heartbeat: '60m',
    },
    {
      id: 'researcher',
      name: 'RESEARCHER',
      model: 'claude-sonnet-4-6',
      role: 'Deep research & data analysis',
      tier: 'command',
      premium: true,
      skills: 8,
      channels: ['API'],
      status: 'active',
      heartbeat: '90m',
    },
    {
      id: 'coder',
      name: 'CODER',
      model: 'claude-sonnet-4-6',
      role: 'Code generation & review',
      tier: 'command',
      premium: true,
      skills: 15,
      channels: ['API', 'SLACK'],
      status: 'active',
      heartbeat: '30m',
    },
    {
      id: 'writer',
      name: 'WRITER',
      model: 'gpt-4o-mini',
      role: 'Content creation & copywriting',
      tier: 'operations',
      premium: false,
      skills: 6,
      channels: ['API', 'SLACK'],
      status: 'active',
      heartbeat: '120m',
    },
    {
      id: 'sales',
      name: 'SALES AGENT',
      model: 'gpt-4o-mini',
      role: 'Lead generation & outreach',
      tier: 'operations',
      premium: false,
      skills: 10,
      channels: ['TG', 'WA', 'API'],
      status: 'active',
      heartbeat: '60m',
    },
    {
      id: 'support',
      name: 'SUPPORT',
      model: 'gpt-4o-mini',
      role: 'Customer support & FAQ',
      tier: 'operations',
      premium: false,
      skills: 5,
      channels: ['TG', 'WA', 'SLACK'],
      status: 'active',
      heartbeat: '15m',
    },
    {
      id: 'monitor',
      name: 'MONITOR',
      model: 'gpt-4o-mini',
      role: 'System health & alerting',
      tier: 'support',
      premium: false,
      skills: 8,
      channels: ['API', 'SLACK'],
      status: 'active',
      heartbeat: '5m',
    },
    {
      id: 'security',
      name: 'SECURITY',
      model: 'claude-haiku-4-5',
      role: 'Threat detection & compliance',
      tier: 'support',
      premium: false,
      skills: 6,
      channels: ['API'],
      status: 'idle',
      heartbeat: '360m',
    },
  ],

  // ── CRON JOBS / SCHEDULED TASKS ───────────────────────────
  crons: [
    { agent: 'COORDINATOR', name: 'Daily Standup Summary', schedule: '09:00 daily', status: 'ok' },
    { agent: 'RESEARCHER', name: 'Market Trends Report', schedule: '06:00 daily', status: 'ok' },
    { agent: 'CODER', name: 'Dependency Audit', schedule: '03:00 daily', status: 'ok' },
    { agent: 'SALES', name: 'Lead Pipeline Check', schedule: '09:00, 14:00, 18:00', status: 'ok' },
    { agent: 'MONITOR', name: 'Health Sweep', schedule: 'Every 5 min', status: 'ok' },
    { agent: 'SECURITY', name: 'Security Scan', schedule: '03:00, 15:00', status: 'ok' },
    { agent: 'WRITER', name: 'Social Media Posts', schedule: '10:00, 16:00', status: 'ok' },
    { agent: 'SUPPORT', name: 'Ticket Digest', schedule: '08:00, 17:00', status: 'ok' },
  ],

  // ── CHANNELS ──────────────────────────────────────────────
  channels: [
    { name: 'Slack', icon: '\u2709', status: 'online', detail: '4 CHANNELS' },
    { name: 'Telegram', icon: '\u2708', status: 'online', detail: '3 BOTS' },
    { name: 'WhatsApp', icon: '\u260E', status: 'online', detail: 'ACTIVE' },
    { name: 'API Gateway', icon: '\uD83D\uDDA5', status: 'online', detail: 'REST + WS' },
  ],

  // ── MODEL PROVIDERS ───────────────────────────────────────
  providers: [
    { name: 'OpenAI', detail: 'gpt-4o, gpt-4o-mini', status: 'active', label: 'PRIMARY' },
    { name: 'Anthropic', detail: 'claude-sonnet-4-6, haiku', status: 'active', label: 'ACTIVE' },
    { name: 'Groq', detail: 'llama-3.3-70b', status: 'active', label: 'FAST' },
    { name: 'Ollama (Local)', detail: 'qwen2.5:7b', status: 'local', label: 'LOCAL' },
  ],

  // ── REVENUE / KPI STREAMS (optional) ──────────────────────
  revenue: [
    { name: 'SaaS Subscriptions', icon: '\uD83D\uDCBB', status: 'online', detail: '$4.2K MRR' },
    { name: 'API Usage', icon: '\u26A1', status: 'online', detail: '$890/mo' },
    { name: 'Consulting', icon: '\uD83D\uDCBC', status: 'online', detail: '3 CLIENTS' },
  ],

  // ── SYSTEM INFO (right panel) ─────────────────────────────
  system: {
    platform: 'Cloud VPS',           // e.g. 'Mac Mini M4', 'AWS EC2', etc.
    ram: { total: 16, unit: 'GB' },  // Total RAM for gauge
    gatewayPort: 8080,
  },

  // ── SOLAR SYSTEM VIEW ─────────────────────────────────────
  // URL for the orbital visualization (embedded as iframe).
  // Set to 'index.html' if hosted in the same directory.
  solarSystemUrl: 'index.html',
};
