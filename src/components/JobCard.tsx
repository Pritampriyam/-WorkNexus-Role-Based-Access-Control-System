import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Banknote,
  Clock,
  Bookmark,
  ExternalLink,
  Users,
  Calendar,
  Edit,
  Trash2,
} from "lucide-react";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  batch: string;
  tech: string[];
  deadline: string;
  saved: boolean;
  onToggleSave: (id: number) => void;
  applicants?: number;
  visitors?: number;
  difficulty?: "Fresher" | "Intermediate" | "Expert";
  applyUrl?: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export const JobCard = ({
  id,
  title,
  company,
  logo,
  location,
  salary,
  type,
  batch,
  tech,
  deadline,
  saved,
  onToggleSave,
  applicants = Math.floor(Math.random() * 150) + 20,
  visitors = 455,
  difficulty = "Intermediate",
  applyUrl = "https://apply.worknexus.com/",
  onEdit,
  onDelete,
}: JobCardProps) => {
  const [isSaved, setIsSaved] = useState(saved);
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    onToggleSave(id);
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Fresher":
        return "bg-green-500/20 text-green-700 dark:text-green-400";
      case "Expert":
        return "bg-red-500/20 text-red-700 dark:text-red-400";
      default:
        return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
    }
  };

  const daysLeft = Math.ceil(
    (new Date(deadline).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24),
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all shadow-card hover:shadow-lg cursor-pointer h-full flex flex-col"
    >
      {/* Header with Logo and Save Button */}
      <div className="px-4 pt-4 pb-3 flex items-start justify-between gap-2">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="text-2xl flex-shrink-0">{logo}</div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-sm leading-tight truncate">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground truncate">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {onEdit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(id);
              }}
              className="p-1.5 rounded text-blue-500 hover:bg-blue-500/10 transition-colors"
              title="Edit job"
            >
              <Edit className="h-3.5 w-3.5" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
              className="p-1.5 rounded text-red-500 hover:bg-red-500/10 transition-colors"
              title="Delete job"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          )}
          <button
            onClick={handleSave}
            className={`p-1.5 rounded flex-shrink-0 transition-all ${
              isSaved
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title={isSaved ? "Remove from saved" : "Save job"}
          >
            <Bookmark
              className="h-4 w-4"
              fill={isSaved ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      {/* Difficulty Badge */}
      <div className="px-4 pb-2">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full inline-block ${getDifficultyColor()}`}
        >
          {difficulty}
        </span>
      </div>

      {/* Tech Stack */}
      <div className="px-4 pb-3">
        <div className="flex flex-wrap gap-1">
          {tech.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
            >
              {t}
            </span>
          ))}
          {tech.length > 2 && (
            <span className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground font-medium">
              +{tech.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="px-4 py-3 space-y-2 text-xs text-muted-foreground border-t border-border/50 flex-1">
        <div className="flex items-center gap-1.5 truncate">
          <MapPin className="h-3 w-3 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center gap-1.5 truncate">
          <Banknote className="h-3 w-3 flex-shrink-0" />
          <span className="truncate font-medium text-foreground">{salary}</span>
        </div>
        <div className="flex items-center gap-1.5 truncate">
          <Clock className="h-3 w-3 flex-shrink-0" />
          <span className="truncate">{type}</span>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="px-4 py-3 border-t border-border/50 text-xs text-muted-foreground space-y-2">
        <div className="flex items-center justify-between gap-1">
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {visitors} visitors
          </span>
          <span
            className={`font-medium ${daysLeft <= 7 ? "text-red-500" : ""}`}
          >
            <Calendar className="h-3 w-3 inline mr-1" />
            {daysLeft}d left
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 pb-3 pt-2 border-t border-border/50">
        <motion.a
          href={applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1 block"
        >
          Apply <ExternalLink className="h-3 w-3" />
        </motion.a>
      </div>
    </motion.div>
  );
};
