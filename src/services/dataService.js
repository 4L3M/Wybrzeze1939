// Data service layer - mockup for future backend integration
// Currently uses local JSON files, can be easily replaced with REST API calls

import newsData from '../data/news.json';
import eventsData from '../data/events.json';
import exhibitionsData from '../data/exhibitions.json';

// Simulate API delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// News Service
export const newsService = {
  async getAll() {
    await delay();
    return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  },
  
  async getById(id) {
    await delay();
    return newsData.find(item => item.id === parseInt(id));
  },
  
  async getRecent(limit = 3) {
    await delay();
    return [...newsData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);
  },
  
  // Admin operations (mock - will be replaced with real API)
  async create(item) {
    await delay();
    const newItem = {
      ...item,
      id: Math.max(...newsData.map(n => n.id), 0) + 1,
      date: new Date().toISOString().split('T')[0]
    };
    newsData.push(newItem);
    return newItem;
  },
  
  async update(id, item) {
    await delay();
    const index = newsData.findIndex(n => n.id === parseInt(id));
    if (index !== -1) {
      newsData[index] = { ...newsData[index], ...item };
      return newsData[index];
    }
    throw new Error('News item not found');
  },
  
  async delete(id) {
    await delay();
    const index = newsData.findIndex(n => n.id === parseInt(id));
    if (index !== -1) {
      newsData.splice(index, 1);
      return true;
    }
    return false;
  }
};

// Events Service
export const eventsService = {
  async getAll() {
    await delay();
    return [...eventsData].sort((a, b) => new Date(a.date) - new Date(b.date));
  },
  
  async getById(id) {
    await delay();
    return eventsData.find(item => item.id === parseInt(id));
  },
  
  async getUpcoming(limit = 3) {
    await delay();
    const now = new Date();
    return [...eventsData]
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, limit);
  },
  
  async create(item) {
    await delay();
    const newItem = {
      ...item,
      id: Math.max(...eventsData.map(e => e.id), 0) + 1
    };
    eventsData.push(newItem);
    return newItem;
  },
  
  async update(id, item) {
    await delay();
    const index = eventsData.findIndex(e => e.id === parseInt(id));
    if (index !== -1) {
      eventsData[index] = { ...eventsData[index], ...item };
      return eventsData[index];
    }
    throw new Error('Event not found');
  },
  
  async delete(id) {
    await delay();
    const index = eventsData.findIndex(e => e.id === parseInt(id));
    if (index !== -1) {
      eventsData.splice(index, 1);
      return true;
    }
    return false;
  }
};

// Exhibitions Service
export const exhibitionsService = {
  async getAll() {
    await delay();
    return [...exhibitionsData];
  },
  
  async getById(id) {
    await delay();
    return exhibitionsData.find(item => item.id === parseInt(id));
  },
  
  async getCurrent() {
    await delay();
    return exhibitionsData.filter(ex => ex.status === 'current');
  },
  
  async getArchive() {
    await delay();
    return exhibitionsData.filter(ex => ex.status === 'archive');
  },
  
  async create(item) {
    await delay();
    const newItem = {
      ...item,
      id: Math.max(...exhibitionsData.map(e => e.id), 0) + 1
    };
    exhibitionsData.push(newItem);
    return newItem;
  },
  
  async update(id, item) {
    await delay();
    const index = exhibitionsData.findIndex(e => e.id === parseInt(id));
    if (index !== -1) {
      exhibitionsData[index] = { ...exhibitionsData[index], ...item };
      return exhibitionsData[index];
    }
    throw new Error('Exhibition not found');
  },
  
  async delete(id) {
    await delay();
    const index = exhibitionsData.findIndex(e => e.id === parseInt(id));
    if (index !== -1) {
      exhibitionsData.splice(index, 1);
      return true;
    }
    return false;
  }
};

// Auth Service (mock - for admin panel)
export const authService = {
  async login(username, password) {
    await delay();
    // Mock authentication - replace with real auth
    if (username === 'admin' && password === 'admin123') {
      const user = { id: 1, username: 'admin', role: 'admin' };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    throw new Error('Invalid credentials');
  },
  
  async logout() {
    await delay();
    localStorage.removeItem('user');
  },
  
  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
  
  isAuthenticated() {
    return !!this.getCurrentUser();
  }
};
