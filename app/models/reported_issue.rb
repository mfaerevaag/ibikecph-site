class ReportedIssue < ActiveRecord::Base

  belongs_to :user
  attr_accessible :route_segment, :comment, :error_type, :is_open
  validates_presence_of :comment, :error_type

  scope :all_issues, order('created_at desc')
  scope :open_issues, where('is_open is true').order('created_at desc')
  scope :closed_issues, where('is_open is false').order('created_at desc')

end
