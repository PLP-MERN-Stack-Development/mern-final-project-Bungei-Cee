const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  team: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['member', 'manager'],
      default: 'member'
    },
    joinedAt: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['planning', 'in-progress', 'on-hold', 'completed', 'cancelled'],
    default: 'planning'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date
  },
  tags: [{
    type: String,
    trim: true
  }],
  color: {
    type: String,
    default: '#6366f1' // Indigo color
  },
  isArchived: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for tasks
projectSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'project'
});

// Index for faster queries
projectSchema.index({ owner: 1, status: 1 });
projectSchema.index({ 'team.user': 1 });

// Method to check if user is team member
projectSchema.methods.isTeamMember = function(userId) {
  return this.team.some(member => member.user.toString() === userId.toString()) || 
         this.owner.toString() === userId.toString();
};

// Method to check if user is manager or owner
projectSchema.methods.canManage = function(userId) {
  if (this.owner.toString() === userId.toString()) return true;
  const member = this.team.find(m => m.user.toString() === userId.toString());
  return member && member.role === 'manager';
};

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;